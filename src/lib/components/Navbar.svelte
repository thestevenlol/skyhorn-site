<script lang="ts">
	import type { NavItem } from '$lib/navbar';
	let { items }: { items: NavItem[] } = $props();
</script>

<div class="flex h-20 w-full flex-row items-center justify-between bg-black px-20">
	<!-- 
    home icon on left 
    hrefs on right
    middle? idk
    -->
	<div class="home">homeicon</div>
	<ul class="mr-20 flex flex-row gap-16">
		{#each items as item}
			<li><a href={item.href}>{item.name}</a></li>
		{/each}
	</ul>
</div>
