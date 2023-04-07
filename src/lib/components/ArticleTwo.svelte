<script>
	import ButtonOne from "./ButtonOne.svelte";

	export let obj = {
		
	};

	let buttonAttributs = {
        href: '#',
        text: "Commencez aujourd'hui",
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

				<div class="py-8">
					<ButtonOne {buttonAttributs} />
				</div>
				
			</div>
		</div>
	</div>
</section>
