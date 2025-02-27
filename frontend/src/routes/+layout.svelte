<script lang="ts">
	import Header from '../ui/header/Header.svelte';
	import '../app.scss';
	import '@fontsource/jetbrains-mono';
	import Main from '@ui/main/Main.svelte';
	let { children } = $props();
</script>

<Header />
<Main>
	{@render children?.()}
</Main>
