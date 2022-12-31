<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import { pb } from '$lib/pocketbase';
	import type { TodoItemRecord } from '$lib/todos';
	import type { PageData } from './$types';

	export let data: PageData;

	let todoText: string;

	const addTodo = async () => {
		await pb.collection('todos').create<TodoItemRecord>({
			todo_list: data.todoList.id,
			content: todoText,
			checked: false
		});

		todoText = '';

		await invalidate('app:todos');
	};

	const toggleTodo = async (todo: TodoItemRecord) => {
		await pb.collection('todos').update(todo.id, {
			checked: todo.checked
		});

		await invalidate('app:todos');
	};

	const deleteCheckedTodos = async () => {
		const promises = data.todos
			.filter((x) => x.checked)
			.map((x) => pb.collection('todos').delete(x.id));

		await Promise.all(promises);
		await invalidate('app:todos');
	};

	const deleteTodoList = async () => {
		await pb.collection('todo_lists').delete(data.todoList.id);
		await goto('/todos');
	};
</script>

<div class="p-4 max-w-md w-full">
	<div class="text-sm breadcrumbs">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/todos">Todo's</a></li>
			<li>{data.todoList.name}</li>
		</ul>
	</div>
	<div class="flex flex-col justify-center gap-4">
		<form on:submit|preventDefault={addTodo}>
			<div class="form-control">
				<div class="input-group">
					<input
						type="text"
						placeholder="Enter a todo here..."
						class="input input-bordered w-full"
						bind:value={todoText}
					/>
					<button class="btn" type="submit">Add</button>
				</div>
			</div>
		</form>
		{#each data.todos.filter((x) => !x.checked) as todo (todo.id)}
			<TodoItem {todo} checkedCallback={toggleTodo} />
		{/each}
		{#each data.todos.filter((x) => x.checked) as todo (todo.id)}
			<TodoItem {todo} checkedCallback={toggleTodo} />
		{/each}
		<button class="btn btn-warning" on:click={deleteCheckedTodos}>Delete checked todos</button>
		<button class="btn btn-error" on:click={deleteTodoList}>Delete todo list</button>
	</div>
	<!-- <div class="toast">
		<div class="alert alert-success">
			<div>
				<span>Successfully saved todo!</span>
			</div>
		</div>
		<div class="alert alert-error">
			<div>
				<span>An error occurred saving todo!</span>
			</div>
		</div>
	</div> -->
</div>
