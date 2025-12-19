<script lang="ts">
	let { children } = $props();
	import Navbar from '$lib/components/Navbar.svelte';
	import { navItems } from '$lib/navbar';
</script>

<Navbar items={navItems} />

{@render children()}
