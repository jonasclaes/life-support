import { currentUser } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	if (!get(currentUser)) throw redirect(302, '/account');

	return {};
}) satisfies LayoutLoad;
