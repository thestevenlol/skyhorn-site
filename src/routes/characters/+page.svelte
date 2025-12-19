<script>
	import CharacterCard from '$lib/components/CharacterCard.svelte';
	import { demoCharacter } from '$lib/characters';
</script>

<div class="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	<CharacterCard character={demoCharacter} />
</div>
