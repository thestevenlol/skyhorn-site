<script lang="ts">
	import type { NavItem } from '$lib/components/nav/navbar'; // interface import
	import NavItemComponent from '$lib/components/nav/NavItemComponent.svelte';

	let { items }: { items: NavItem[] } = $props();
</script>

<div class="flex h-full w-full justify-center items-center">
	{#each items as item}
		<NavItemComponent text={item.text} href={item.href} fa_icon={item.fa_icon} />
	{/each}
</div>
