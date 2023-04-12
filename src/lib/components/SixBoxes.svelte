<script>

	export let boxesContent = [
	];

</script>

<section class="bg-transparent " >
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
		<div class="mx-auto max-w-lg text-center">
			<h2 class="text-3xl font-bold sm:text-4xl">Bénéficiez d'une vue d'ensemble</h2>

			
		</div>

		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each boxesContent as box}
				 
				<a
					class="block rounded-xl border dark:border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
					href={box.href}
				>
					
				<svelte:component this={box.component} size={36} color="#E74694" />

					<h3 class="text-xl font-bold mb-2">{box.title}</h3>

					<p class="dark:text-gray-300">{box.content}</p>
				</a>

			{/each}
		</div>
	</div>

</section>


