<script>
	let { data } = $props();

	import HeroButton from '$lib/components/HeroButton.svelte';
	import heroBg from '$lib/assets/img/hero.png';
</script>

<div
	class="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
	style="background-image: url({heroBg})"
>
	<div class="max-w-2xl px-6 text-center">
		<h1 class="mt-22 mb-8 text-5xl font-bold text-white md:text-7xl">{data.title}</h1>
		<p class="mb-12 text-lg leading-relaxed text-white md:text-xl">{data.subtitle}</p>
		<div class="flex flex-row items-center justify-center gap-6">
			<HeroButton text="Explore" href="/characters" />
		</div>
	</div>
</div>

<style>
	h1 {
		font-family: 'Metamorphous', cursive;
	}
</style>
