<script>
	let { text } = $props();
	import NavItemComponent from '$lib/components/NavItem.svelte';
</script>

<div class="flex h-full w-full justify-center align-middle">
	<p>{text}</p>
</div>
