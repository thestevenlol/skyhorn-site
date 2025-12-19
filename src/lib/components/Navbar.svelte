<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.css';
	import type { NavItem } from '$lib/navbar';

	import NavbarSection from '$lib/components/NavbarSection.svelte';

	let { items }: { items: NavItem[] } = $props();
</script>

<div class="flex h-20 w-full justify-between border-b-2 border-b-[#232f44] bg-[#0b0d14] px-4">
	<NavbarSection text="left" />
	<NavbarSection text="middle" />
	<NavbarSection text="right" />
</div>
