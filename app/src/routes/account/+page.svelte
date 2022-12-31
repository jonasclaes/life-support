<script lang="ts">
	import { currentUser, pb } from '$lib/pocketbase';
	import { Record, type AuthMethodsList } from 'pocketbase';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let authMethods: AuthMethodsList | undefined = undefined;

	let username: string;
	let password: string;

	const login = async () => {
		const user = await pb.collection('users').authWithPassword(username, password);
		console.log(user);
	};

	const signOut = () => {
		pb.authStore.clear();
	};

	const loadAuthMethods = async () => {
		authMethods = await pb.collection('users').listAuthMethods();
	};

	$: if (!$currentUser) loadAuthMethods();
</script>

<div class="p-4 max-w-md w-full">
	<div class="text-sm breadcrumbs">
		<ul>
			<li><a href="/">Home</a></li>
			<li>Account</li>
		</ul>
	</div>
	<div class="flex flex-col gap-4">
		{#if $currentUser}
			<div class="flex flex-row justify-center items-center gap-4">
				{#if $currentUser.avatar && $currentUser instanceof Record}
					<div class="avatar">
						<div class="w-24 rounded-full">
							<img
								src={pb.getFileUrl($currentUser, $currentUser.avatar)}
								alt={$currentUser.username}
							/>
						</div>
					</div>
				{/if}
				<h1 class="text-2xl">Hello, <span class="font-bold">{$currentUser.name}</span></h1>
			</div>
			<button class="btn" on:click={signOut}>Sign Out</button>
		{:else}
			<form on:submit|preventDefault={login}>
				<div class="form-control w-full">
					<label class="label" for="username">
						<span class="label-text">Username:</span>
					</label>
					<input
						type="text"
						placeholder="johndoe"
						class="input input-bordered w-full"
						id="username"
						bind:value={username}
					/>
				</div>
				<div class="form-control w-full">
					<label class="label" for="password">
						<span class="label-text">Password:</span>
					</label>
					<input
						type="password"
						class="input input-bordered w-full"
						id="password"
						bind:value={password}
					/>
				</div>
				<button class="btn btn-block mt-4" type="submit">Login</button>
			</form>

			{#each authMethods?.authProviders || [] as authProvider}
				<a
					class="btn btn-primary"
					href={authProvider.authUrl}
					on:click={() => localStorage.setItem('provider', JSON.stringify(authProvider))}
					>{authProvider.name}</a
				>
			{/each}
		{/if}
	</div>
</div>
