<script lang="ts">
	let { name, href, icon }: { name: string; href: string; icon?: string } = $props();
</script>

<li class="cursor-pointer rounded-lg bg-[#0b0d14] p-4 hover:bg-[#232f44]">
	<a {href} class="flex items-center gap-2">
		{#if icon}
			<i class={icon}></i>
		{/if}
		{#if name}
			<span>{name}</span>
		{/if}
	</a>
</li>
