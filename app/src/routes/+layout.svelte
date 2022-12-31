<script lang="ts">
	import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between items-center">
	<slot />
	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<div>
			<p>
				Made by <a
					href="https://www.thomasmore.be"
					rel="noopener noreferrer"
					target="_blank"
					class="link">Jonas Claes</a
				>
				- {new Date().getFullYear()}
			</p>
		</div>
	</footer>
</div>
