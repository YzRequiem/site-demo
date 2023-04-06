<script>
	export let obj = {
		
	};
</script>

<section class="py-5 flex items-center h-screen">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
			<div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full  shadow-[#BE0562] shadow-xl transition">
				<img
					alt={obj.alt}
					src={obj.src}
					class="absolute inset-0 h-full w-full "
				/>
			</div>

			<div class="lg:py-24">
				<h2 class="text-3xl font-bold sm:text-4xl dark:text-slate-100">{obj.title}</h2>

				<p class="mt-4 text-gray-600 dark:text-gray-400">
					{obj.content}
				</p>

				<a
					href={obj.buttonHref}
					class="mt-8 inline-block rounded bg-[#BE0562] px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
				>
					{obj.buttonText}
				</a>
			</div>
		</div>
	</div>
</section>
