<script>
	export let header = {
		title: 'Gérez votre commerce en toute simplicité',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.'
	};

	export let iconsTab = [
		{
			title: 'Gestion de stock efficace',
			src: '/svg/box.svg',
			alt: 'Stock'
		},
		{
			title: 'Gestion de stock efficace',
			src: '/svg/stats.svg',
			alt: 'Stock'
		},
		{
			title: 'Gestion de stock efficace',
			src: '/svg/fuse.svg',
			alt: 'rocket'
		}
	];
</script>

<section class="py-10 bg-white dark:text-white dark:bg-slate-900">
	<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-gray-200 sm:text-4xl">
				{header.title}
			</h2>

			<p class="mt-4 text-gray-500 sm:text-xl">
				{header.content}
			</p>
		</div>

		<div class="mt-8 sm:mt-12">
			<dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{#each iconsTab as box}
					<div
						class="flex flex-col rounded-lg border-gray-500 px-4 py-8 text-center border p-8 shadow-xl transition hover:border-[#23B7E5] hover:shadow-[#23B7E5] cursor-pointer"
					>
						<dt class="order-last text-lg font-medium text-gray-500 dark:text-gray-400 py-5">
							{box.title}
						</dt>

						<dd class="  flex justify-center">
							<img src={box.src} alt={box.alt} class="w-14 h-14" />
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>
