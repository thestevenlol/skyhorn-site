<script lang="ts">
	import type { NavItem } from '$lib/components/nav/navItem';
	let { text, href = '#', fa_icon = '' }: NavItem = $props();
</script>

<li class="cursor-pointer rounded-lg bg-[#0b0d14] p-4 hover:bg-[#232f44]">
	<a href={href} class="flex items-center space-x-2">
		{#if fa_icon}
			<i class={`fas fa-${fa_icon} text-white`}></i>
		{/if}
		<span class="text-white">{text}</span>
	</a>
</li>
