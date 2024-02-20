<script>
	export let title;
	export let texte;
	export let videoSrc;
	export let pdf = {};
</script>

<section class="flex flex-col gap-5 justify-evenly items-center">
	<article class="pt-5">
		<p class="text-xl dark:text-white">{title}</p>
	</article>
	<article id="video" class="flex justify-center">
		<video class="w-96 md:w-6/12" controls>
			<source src={videoSrc} type="video/mp4" />
			<track kind="captions" />
			Your browser does not support the video tag.
		</video>
	</article>
	<article>
		<p>
			{texte}
		</p>
		<button class="btn">Télechargez le tutoriel sous forme de pdf</button>
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
</section>
