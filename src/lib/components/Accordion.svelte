<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { Img } from 'flowbite-svelte';
	import { Heading, Span } from 'flowbite-svelte';

	const imagesTab = ['/siteappdemo1.png', '/siteappdemo2.png'];

	function updateSelectedImage(index) {
		return (selectedImage = index);
	}
	let selectedImage = 0;
</script>

<section class="w-full h-screen flex flex-col items-center justify-center">
	<div class="flex flex-col py-5 w-8/12 center">
		<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
			><Span gradient>Les Statistiques</Span> </Heading
		>
		<div class="flex py-5 w-full center">
			<div class="w-1/4">
				<Accordion>
					<div on:click={() => updateSelectedImage(0)} on:keydown>
						<AccordionItem>
							<span slot="header">My Header 1</span>
							<p class="mb-2 text-gray-500 dark:text-gray-400">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus
								sint explicabo ...
							</p>
						</AccordionItem>
					</div>
					<div on:click={() => updateSelectedImage(1)} on:keydown>
						<AccordionItem>
							<span slot="header">My Header 2</span>
							<p class="mb-2 text-gray-500 dark:text-gray-400">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus
								sint explicabo ...
							</p>
							<p class="mb-2 text-gray-500 dark:text-gray-400">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus
								sint explicabo ...
							</p>
							<p class="mb-2 text-gray-500 dark:text-gray-400">
								Learn more about these technologies:
							</p>
							<ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
								<li>
									<a
										href="/"
										target="_blank"
										rel="noreferrer"
										class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a
									>
								</li>
								<li>
									<a
										href="https://tailwindui.com/"
										rel="noreferrer"
										target="_blank"
										class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a
									>
								</li>
							</ul>
						</AccordionItem>
					</div>
				</Accordion>
			</div>
			<div class="w-3/4">
				<Img src={imagesTab[selectedImage]} alt="sample 1" class="rounded-lg" />
			</div>
		</div>
	</div>
</section>
