<script lang="ts">
	import type { PageData } from './$types';
	import background from '$lib/assets/background.jpg';

	export let data: PageData;
</script>

<div class="hero min-h-screen" style="background-image: url({background});">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Authenticating...</h1>
			<p class="mb-5">This will only take a moment.</p>
		</div>
	</div>
</div>
