<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { currentUser, pb } from '$lib/pocketbase';
	import { Record, type AuthMethodsList } from 'pocketbase';
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
			<div class="flex flex-col w-full">
				<div class="card">
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
				</div>
				<div class="divider">OR</div>
				<div class="card">
					{#if authMethods?.authProviders === undefined || authMethods.authProviders.length === 0}
						<p class="text-center italic">No OAuth2 providers have been set up.</p>
					{/if}
					{#each authMethods?.authProviders?.sort((a, b) => {
						if (a.name < b.name) return -1;
						if (a.name > b.name) return 1;
						return 0;
					}) || [] as authProvider}
						<a
							class="btn btn-primary"
							href={authProvider.authUrl + `${env.PUBLIC_BASE_URL}/account/oauth2`}
							on:click={() => localStorage.setItem('provider', JSON.stringify(authProvider))}
							>{authProvider.name}</a
						>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
