import type { Record } from 'pocketbase';

export type TodoList = {
	slug: string;
	name: string;
	description: string;
	image: string;
};

export type TodoItem = {
	content: string;
	checked: boolean;
};

export type TodoListRecord = TodoList & Record;
export type TodoItemRecord = TodoItem & Record;
