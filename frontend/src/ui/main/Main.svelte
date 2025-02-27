<script lang="ts">
	let { children } = $props();
</script>

<main class="relative min-h-[calc(100dvh-4rem)] w-full rounded-md bg-background p-4">
	{@render children?.()}
</main>
