<script lang="ts">
	import { page } from '$app/stores';
	import backgroundError from '$lib/assets/background-error.jpg';

	function goBack() {
		history.back();
	}
</script>

<div class="hero min-h-screen" style="background-image: url({backgroundError});">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{$page.status} - {$page.error?.message}</h1>
			<p class="mb-5">
				It looks like something went wrong. This is probably our fault. Please try again later!
			</p>
			<button class="btn btn-primary" on:click={goBack}>Go back</button>
		</div>
	</div>
</div>
