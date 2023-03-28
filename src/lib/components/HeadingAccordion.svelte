<script>
	import { Tabs, TabItem, Button, Heading, Span } from 'flowbite-svelte';

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

<div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
			><Span gradient>Gestion de Stocks</Span>
		</Heading>
	<Tabs>
		{#each tabAccordion as tab}
			<TabItem open>
				<span slot="title">{tab.title}</span>
				<p class="text-sm text-gray-500 dark:text-gray-400"><b>{tab.title}</b> {tab.content}</p>
				<div class="py-5">
					<img src={tab.src} alt={tab.alt} class="rounded-lg h-full" />
				</div>
			</TabItem>
		{/each}
	</Tabs>
</div>
