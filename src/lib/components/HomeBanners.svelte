<script>
	import ButtonOne from "./ButtonOne.svelte";

	let buttonAttributs = {
        href: '/contact',
        text: "Commencez aujourd'hui",
    };


</script>
<section class="bg-image">
	<div class="layer overflow-hidden h-90vh grid-row-2 grid">
		<div class=" " />
		<div class="p-8 flex items-center">
			<div class="mx-auto max-w-xl text-center sm:text-left flex flex-col gap-5">
				<div class="flex items-center justify-center gap-3 md:justify-start">
					<img src="/logoSSrose.webp" alt="logo" class="h-20 w-20" />
					<h1 class="text-3xl font-bold md:text-3xl text-slate-100">
						SilverStock
					</h1>
				</div>
				<h2 class="text-2xl font-bold md:text-3xl text-slate-100">
					Un outil de gestion simple et performant
				</h2>

				<p class="hidden text-gray-300 md:mt-4 md:block">
					Nous puisons notre inspiration dans votre métier et ses évolutions pour imaginer des
					outils innovants qui vous ouvrent les possibles.
				</p>

				<div class="mt-4 md:mt-8">
					<ButtonOne {buttonAttributs} />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.h-90vh {
		height: 95vh;
	}

	.bg-image {
		background-image: url('/imagebanner.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.layer {
		background-image: url('/layerbg.webp');

		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
</style>
