<script lang="ts">
	// css
	import '@fortawesome/fontawesome-free/css/all.css';
	
	// ts
	import { navItems } from './navbar';
	
	// components
	import NavbarSection from './NavbarSection.svelte';
</script>

<div class="flex h-20 w-full justify-between border-b-2 border-b-[#232f44] bg-[#0b0d14] px-4">
	{#each navItems as sectionItems}
		<NavbarSection items={sectionItems} />
	{/each}
</div>
