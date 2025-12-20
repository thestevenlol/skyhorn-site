<script lang="ts">
	import type { NavItem } from './navItem';
	let { text = '', href = '#', fa_icon = '' }: NavItem = $props();
</script>

<li class="list-none cursor-pointer rounded-lg bg-[#0b0d14] p-4 hover:bg-[#232f44]">
	<a href={href} class="flex items-center space-x-2">
		{#if fa_icon}
			<i class={`${fa_icon} text-white`}></i>
		{/if}
		{#if text}
			<span class="text-white">{text}</span>
		{/if}
	</a>
</li>
