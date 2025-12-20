<script>
	let { text = 'Replace Me!', href = '#' } = $props();
</script>

<a {href} class="group relative inline-block">
	<button
		class="relative cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-800 bg-slate-900 px-40 py-4 text-xl font-bold text-white transition-all duration-300 
"
	>
		<span
			class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full"
		></span>
		<span class="relative">{text}</span>
	</button>
</a>
