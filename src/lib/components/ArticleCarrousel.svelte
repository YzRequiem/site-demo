<script>
	import { Carousel } from 'flowbite-svelte';
	import { images } from './+server.js';


	let showThumbs = false;
</script>

<section>
	<div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6  lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div class="relative z-10 lg:py-16">
				<div class="relative h-64 sm:h-80 lg:h-full ">

					<div class="max-w-4xl">
						<Carousel {images} {showThumbs} indicatorClass='bg-black w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60' />
					</div>
				</div>
			</div>

			<div
				class="relative flex items-center bg-gradient-to-r from-green-400 to-blue-500 lg:rounded-l-none md:rounded-b-xl lg:rounded-r-xl"
			>
				<span
					class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 rounded-l-xl lg:bg-gradient-to-r from-blue-400 to-green-400"
				/>

				<div class="p-8 sm:p-16 lg:p-24">
					<h2 class="text-2xl font-bold sm:text-3xl">
						Une gestion évidente de vos Gammes Liquides
					</h2>

					<p class="mt-4 text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
						esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
						architecto eius quis quibusdam fugiat dicta.
					</p>

					<a
						href="/"
						class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
					>
						Get in Touch
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
