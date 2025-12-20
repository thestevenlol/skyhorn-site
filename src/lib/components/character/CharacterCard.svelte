<script lang="ts">
	import type { Character } from '$lib/characters';

	let { character }: { character: Character } = $props();
</script>

<div class="min-h-140 w-100 rounded-2xl border-2 border-b-blue-50 bg-slate-600 p-4">
	<div class="img-container h-3/5 w-full bg-red-950"></div>
	<div class="text-container h-2/5 w-full bg-green-500">
		<p class="text-4xl" style="font-family: 'Metamorphous', serif;">{character.name}</p>
	</div>
</div>
