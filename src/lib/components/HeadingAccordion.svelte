<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
	import HeadingTitle from './HeadingTitle.svelte';
	import HeadingParagraph from './HeadingParagraph.svelte';
	let titleStocks = 'Gestion de Stocks';

	let stockIntro =
		"Au sein de l'entreprise, toute la chaîne de vie d'un produit, de son arrivée au dépôt jusqu'à sa remise au client, est gérée par l'application. Grâce à un algorithme de prévision des besoins, basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. Tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures.";

	const tabAccordion = [
		{
			title: 'Gestion des stocks',
			content: 'Visualisez l’ensemble de vos stocks ',
			src: '/appStocks1.png',
			alt: 'Stocks des boutiques'
		},
		{
			title: "Gestion d'un stock boutique",
			content: " Visualisez et gérez l'etat des stocks de chaque boutique",
			src: '/appStocks2.png',
			alt: 'Stocks des boutiques'
		},
		{
			title: 'Détails réassort',
			content: 'Consultez les détails des réassorts',
			src: '/appStocks3.png',
			alt: 'Stocks des boutiques'
		}
	];
</script>

<section id="stocks" class="flex justify-center mt-20">
	<div class="lg:w-8/12">
		<HeadingTitle title={titleStocks} />
		<HeadingParagraph content={stockIntro} />
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
					<div class="py-5">
						<img src={tab.src} alt={tab.alt} class="rounded-lg h-full" />
					</div>
				</TabItem>
			{/if}
		{/each}
	</Tabs>
</section>
