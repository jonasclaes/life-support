import { pb } from '$lib/pocketbase';
import type { TodoItemRecord, TodoListRecord } from '$lib/todos';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async ({ params, depends }) => {
	const resultTodoLists = await pb.collection('todo_lists').getList<TodoListRecord>(1, 50, {
		sort: 'name',
		filter: `slug = "${params.slug}"`
	});

	if (resultTodoLists.totalItems === 0) throw error(404, `Todo list "${params.slug}" not found`);

	const firstTodoList = resultTodoLists.items[0];

	const resultTodoItems = await pb.collection('todos').getList<TodoItemRecord>(1, 50, {
		sort: 'created',
		filter: `todo_list.id = "${firstTodoList.id}"`
	});

	depends('app:todos');

	return {
		todoList: firstTodoList,
		todos: resultTodoItems.items
	};
}) satisfies PageLoad;
