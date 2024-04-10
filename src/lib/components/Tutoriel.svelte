<script>
	export let title;
	export let texte;
	export let src;
	export let pdf = {};
</script>

<section class="flex flex-col gap-10 justify-center items-center p-10">
	<article class="pt-5">
		<p class="text-3xl dark:text-white">{title}</p>
	</article>
	{#if src !== undefined && src !== ''}
		<article id="video" class="flex justify-center w-96 md:w-6/12 aspect-video">
			<iframe
				width="100%"
				{src}
				{title}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</article>
	{/if}
	{#if pdf}
		<article>
			<p class="text-center">
				{texte}
			</p>
			<p class="text-center">Télechargez le tutoriel sous forme de pdf</p>
		</article>
		<article>
			<a
				class="inline-block rounded bg-[#BE0562] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#2594E4] focus:outline-none focus:ring focus:ring-yellow-400"
				href={pdf.link}
				download={pdf.fileName}
				rel="noopener noreferrer"
			>
				Téléchargez le pdf
			</a>
		</article>
	{/if}
</section>
