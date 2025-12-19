<script>
	let { children } = $props();
</script>

<div
	class="min-h-screen bg-[#0b0d14] bg-[radial-gradient(circle,rgba(120,170,255,0.10)_1px,transparent_1px)] bg-size-[14px_14px] text-gray-200"
>
	{@render children()}
</div>
