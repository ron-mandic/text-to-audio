<script>
	import AudioPlayer from '@features/audio-player/components/AudioPlayer.svelte';
	import { tracks } from '@features/audio-player/lib/constants';
</script>

<div>
	{#each tracks.slice(0, 1) as track}
		<AudioPlayer {...track} />
	{/each}
</div>
