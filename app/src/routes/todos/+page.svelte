<script lang="ts">
	import type { PageData } from './$types';
	import backgroundTodo from '$lib/assets/background-todo.jpg';
	import { currentUser, pb } from '$lib/pocketbase';
	import slug from 'slug';
	import { invalidate } from '$app/navigation';

	export let data: PageData;

	let todoListName: string;

	const addTodoList = async () => {
		await pb.collection('todo_lists').create({
			name: todoListName,
			slug: slug(todoListName),
			description: '',
			image: '',
			owner: $currentUser?.id
		});

		todoListName = '';

		await invalidate('app:todo_lists');
	};
</script>

<div class="p-4 max-w-md w-full">
	<div class="text-sm breadcrumbs">
		<ul>
			<li><a href="/">Home</a></li>
			<li>Todo's</li>
		</ul>
	</div>
	<div class="flex flex-col justify-center items-center gap-4">
		<form on:submit|preventDefault={addTodoList} class="w-full">
			<div class="form-control">
				<div class="input-group">
					<input
						type="text"
						placeholder="Enter a todo list name here..."
						class="input input-bordered w-full"
						bind:value={todoListName}
					/>
					<button class="btn" type="submit">Add</button>
				</div>
			</div>
		</form>
		{#each data.todoLists as todoList}
			<div class="card w-96 h-48 bg-base-100 shadow-xl image-full">
				<figure>
					<img
						src={todoList.image || backgroundTodo}
						alt={todoList.name}
						class="object-fill w-full h-full"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">{todoList.name}</h2>
					<p>{todoList.description}</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="/todos/{todoList.slug}">Open</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
