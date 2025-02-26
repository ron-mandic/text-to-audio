<script lang="ts">
	import '../app.scss';
	import '@fontsource/jetbrains-mono';
	let { children } = $props();
</script>

<main class="relative min-h-[calc(100dvh-1rem)] w-full rounded-md bg-marsha">
	{@render children()}
</main>
