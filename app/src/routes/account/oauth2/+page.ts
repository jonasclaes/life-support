import { pb } from '$lib/pocketbase';
import { error } from '@sveltejs/kit';
import type { AuthProviderInfo } from 'pocketbase';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async ({ url }) => {
	const provider: AuthProviderInfo = JSON.parse(localStorage.getItem('provider') || '');

	if (provider.state !== url.searchParams.get('state')) {
		throw error(400, 'State parameters do not match.');
	}

	const code = url.searchParams.get('code');

	if (!code) {
		throw error(400, 'No code was given by the OAuth provider.');
	}

	const result = await pb
		.collection('users')
		.authWithOAuth2(
			provider.name,
			code,
			provider.codeVerifier,
			`${url.protocol}//${url.host}/account`,
			{
				emailVisibility: false
			}
		);

	console.log(result);

	return {};
}) satisfies PageLoad;
