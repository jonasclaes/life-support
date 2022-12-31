import { pb } from '$lib/pocketbase';
import type { TodoListRecord } from '$lib/todos';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async ({ depends }) => {
	const resultTodoLists = await pb.collection('todo_lists').getList<TodoListRecord>(1, 50, {
		sort: 'name'
	});

	depends('app:todo_lists');

	return {
		todoLists: resultTodoLists.items
	};
}) satisfies PageLoad;
