<script>
	export let imgListDeuxImages = [];

	export let header = {};
</script>

<section class="xl:h-screen xl:flex items-center ">
	<div class="mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
				<div class="mx-auto max-w-xl text-center">
					<h2 class="text-2xl font-bold text-white md:text-3xl">
						{header.title}
					</h2>

					<p class="hidden text-white/90 sm:mt-4 sm:block">
						{header.content}
					</p>

					<div class="mt-4 md:mt-8">
						<a
							href={header.buttonHref}
							class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
						>
							{header.buttonTitle}
						</a>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-2  md:grid-cols-1 2xl:grid-cols-2">
				{#each imgListDeuxImages as img}
					<img alt={img.alt} src={img.src} class="h-40 w-full  object-cover sm:h-56 md:h-full " />
				{/each}
			</div>
		</div>
	</div>
</section>
