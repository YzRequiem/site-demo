<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { Img } from 'flowbite-svelte';
	import HeadingTitle from './HeadingTitle.svelte';

	let titleStats = 'Les Statistiques';
	export let imagesTabAccordion = [];

	export let sectionsTabAccordion = [];

	let selectedImage = 0;

	function updateSelectedImage(index) {
		return (selectedImage = index);
	}



</script>

<section class="flex justify-center mt-20">
	<div class="lg:w-8/12 ">
		<HeadingTitle title={titleStats} />
	</div>
</section>
<section class="w-full my-5 flex items-center justify-center py-5">
	<div class="flex flex-col py-5 w-full lg:w-8/12 center">
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
							<AccordionItem class="!rounded-none ">
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
