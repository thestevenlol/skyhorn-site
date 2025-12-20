<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import CommonBackground from '$lib/components/CommonBackground.svelte';
	import Navbar from '$lib/components/nav/Navbar.svelte';
	import { navItems } from '$lib/components/nav/navItem';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar {navItems} />
<CommonBackground {children} />
