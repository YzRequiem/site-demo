<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { Img } from 'flowbite-svelte';
	import { Heading, Span } from 'flowbite-svelte';

	export let imagesTabAccordion = [];

	export let sectionsTabAccordion = [];

	let selectedImage = 0;

	function updateSelectedImage(index) {
		return (selectedImage = index);
	}

	let hoverBorderNone = 'group-first:rounded-t-none';

</script>

<section class="w-full h-screen flex items-center justify-center py-5">
	<div class="flex flex-col py-5 w-full lg:w-8/12 center">
		<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
			><Span gradient>Les Statistiques</Span>
		</Heading>
		<div class="flex py-5 w-full center flex-wrap">
			<div class="w-full min-w-200 xl:w-1/4">
				<Accordion class="mr-5 min-w-200 ">
					{#each sectionsTabAccordion as section, index}
						{#if index === 0}
							<div on:click={() => updateSelectedImage(index)} on:keydown>
								<AccordionItem>
									<span slot="header">{section.title}</span>
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										{section.content}
									</p>
								</AccordionItem>
							</div>
						{:else}									
						
						<div on:click={() => updateSelectedImage(index)} on:keydown>
							<AccordionItem class=" {hoverBorderNone} ">
								<span slot="header">{section.title}</span>
								
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										{section.content}
									</p>
								</AccordionItem>
							</div>
						{/if}
					{/each}
				</Accordion>
			</div>
			<div class="xl:w-3/4 w-full h-96">
				<Img src={imagesTabAccordion[selectedImage]} alt="carrousel" class="rounded-lg h-full" />
			</div>
		</div>
	</div>
</section>

<style>
	.min-w-200 {
		min-width: 200px;
	}
</style>
