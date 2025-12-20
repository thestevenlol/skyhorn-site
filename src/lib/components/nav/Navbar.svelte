<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.css';
	import type { NavItem } from '$lib/components/nav/navbar'; // interface import
	import NavbarSection from '$lib/components/nav/NavbarSection.svelte';
	let { navItems }: { navItems: NavItem[][] } = $props();
</script>

<div class="flex h-20 w-full justify-between border-b-2 border-b-[#232f44] bg-[#0b0d14] px-4">
	{#each navItems as sectionItems}
		<NavbarSection items={sectionItems} />
	{/each}
</div>
