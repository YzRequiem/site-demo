<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
	import HeadingTitle from './HeadingTitle.svelte';
	let titleStocks = 'Gestion de Stocks';

	const tabAccordion = [
		{
			title: 'Gestion des stocks',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...',
			src: '/appStocks1.png',
			alt: 'Stocks des boutiques'
		},
		{
			title: 'Dashboard',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...',
			src: '/appStocks2.png',
			alt: 'Stocks des boutiques'
		},
		{
			title: 'Détails réassort',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...',
			src: '/appStocks3.png',
			alt: 'Stocks des boutiques'
		}
	];
</script>

<section class="flex justify-center  mt-20">
	<div class="lg:w-8/12 ">
		<HeadingTitle title={titleStocks} />
	</div>
</section>

<section class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
	<Tabs>
		{#each tabAccordion as tab, i}
			{#if i === 0}
				<TabItem open>
					<span slot="title">{tab.title}</span>
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>{tab.title}</b> {tab.content}</p>
					<div class="py-5">
						<img src={tab.src} alt={tab.alt} class="rounded-lg h-full" />
					</div>
				</TabItem>
			{:else}
				<TabItem>
					<span slot="title">{tab.title}</span>
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>{tab.title}</b> {tab.content}</p>
					<div class="py-5   ">
						<img src={tab.src} alt={tab.alt} class="rounded-lg h-full" />
					</div>
				</TabItem>
			{/if}
		{/each}
	</Tabs>
</section>
