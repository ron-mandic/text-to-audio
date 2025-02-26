<script module lang="ts">
	let current: HTMLAudioElement | null = null;
</script>

<script lang="ts">
	import { Play, Pause, Download } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	let { src, title, artist } = $props();

	let time = $state(0);
	let duration = $state(0);
	let paused = $state(true);
	let grabbing = $state(false);

	function format(time: number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
</script>

<div
	class="fixed bottom-4 left-1/2 mx-2 grid w-full max-w-[480px] -translate-x-[calc(50%+0.5rem)] gap-x-6 rounded-full border-2 border-border px-3 py-3 text-foreground shadow-sm backdrop-blur-2xl"
	style="grid-template-columns: auto 1fr auto;"
>
	<button
		class="relative block h-10 w-10 cursor-pointer rounded-full bg-foreground"
		aria-label={paused ? 'play' : 'pause'}
		onclick={() => (paused = !paused)}
	>
		{#if paused}
			<span
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
				transition:scale={{ duration: 200, delay: 225 }}
			>
				<Play class="scale-[.8] fill-background text-background" />
			</span>
		{:else}
			<span
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
				transition:scale={{ duration: 200, delay: 225 }}
			>
				<Pause class="fill-background text-background" />
			</span>
		{/if}
	</button>

	<audio
		{src}
		bind:currentTime={time}
		bind:duration
		bind:paused
		onplay={(e) => {
			const audio = e.currentTarget;

			if (audio !== current) {
				current?.pause();
				current = audio;
			}
		}}
		onended={() => {
			time = 0;
		}}
	></audio>

	<div
		class="grid w-full gap-x-3"
		style="grid-template-columns: auto 1fr auto; place-items: center;"
	>
		<span class="select-none font-mono text-sm">{format(time)}</span>
		<div
			class={[
				{
					'h-2 w-full cursor-grab overflow-hidden rounded-full bg-foreground/10': true,
					'cursor-grabbing': grabbing
				}
			]}
			onwheel={(e: WheelEvent) => {
				e.preventDefault();
				let wheelDiff = e.deltaY;

				time += wheelDiff / 2;
				if (time < 0) time = 0;
				if (time > duration) time = duration;
			}}
			onpointerdown={(e: PointerEvent) => {
				const div = e.currentTarget as HTMLDivElement;

				function seek(e: PointerEvent) {
					if (!grabbing) grabbing = true;
					const { left, width } = div.getBoundingClientRect();

					let p = (e.clientX - left) / width;
					if (p < 0) p = 0;
					if (p > 1) p = 1;

					time = p * duration;
				}

				seek(e);

				window.addEventListener('pointermove', seek);
				window.addEventListener(
					'pointerup',
					() => {
						window.removeEventListener('pointermove', seek);
						grabbing = false;
					},
					{
						once: true
					}
				);
			}}
		>
			<div class="h-2 rounded-full bg-foreground" style="width: {(time / duration) * 100}%"></div>
		</div>
		<span class="select-none font-mono text-sm">{duration ? format(duration) : '--:--'}</span>
	</div>

	<button
		class="relative block h-10 w-10 cursor-pointer rounded-full bg-secondary-dimmed transition-colors hover:border-2 hover:border-secondary-foreground-dimmed"
	>
		<span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
			<Download class="scale-75 text-secondary-foreground-dimmed" style="stroke-width: 3;" />
		</span>
	</button>
</div>
