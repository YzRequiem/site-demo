<script>
	export let content;
</script>

{#if content}
	<article class="flex w-full py-10 flex-col lg:flex-row">
		<div class=" w-full px-5">
			<p class="text-lg dark:text-slate-300">
				{content}
			</p>
		</div>
	</article>
{/if}
