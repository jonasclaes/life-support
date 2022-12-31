<script lang="ts">
	import type { TodoItemRecord } from '../todos';

	export let todo: TodoItemRecord;
	export let checkedCallback: (todo: TodoItemRecord) => Promise<void>;
</script>

<div class="card shadow-xl {todo.checked ? 'bg-success' : 'bg-primary'} transition-colors">
	<div class="card-body">
		<div class="form-control">
			<label class="label cursor-pointer flex flex-row justify-between items-center gap-4">
				<input
					type="checkbox"
					bind:checked={todo.checked}
					on:change={() => checkedCallback(todo)}
					class="checkbox"
				/><span class="label-text">{todo.content}</span>
			</label>
		</div>
	</div>
</div>
