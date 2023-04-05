<script>
	import { Card, Button } from 'flowbite-svelte';

	export let plans = [
		{
			title: 'Standard Individuel',
			price: 49,
			activeFeatures: [
				'Tableau de bord simplifié',
				'Inventaires automatique',
				'Arrivage',
				'Requête',
				'Gestion de Stock Standard',
				'Regles panier',
				'Alerte de rupture de stock'
			],
			unactiveFeatures: [
				'Autorisations à plusieurs niveaux',
				'Assistance premium',
				'Règles panier',
				'Commande boutique',
				'Gestion produit Prestashop',
				'Challenge Collaborateur',
				'Gamme liquide',
				'Testeurs'
			],
			button: {
				text: 'Get started',
				href: '#'
			}
		},
		{
			title: 'Standard Multi-boutique',
			price: 99,
			activeFeatures: [
				'Tableau de bord simplifié',
				'Inventaires automatique',
				'Arrivage',
				'Requête',
				'Gestion de Stock Standard',
				'Regles panier',
				'Alerte de rupture de stock'
			],
			unactiveFeatures: [
				'Autorisations à plusieurs niveaux',
				'Assistance premium',
				'Règles panier',
				'Commande boutique',
				'Gestion produit Prestashop',
				'Challenge Collaborateur',
				'Gamme liquide',
				'Testeurs'
			],
			button: {
				text: 'Get started',
				href: '#'
			}
		},
		{
			title: 'Enterprise Multi-boutique',
			price: 199,
			activeFeatures: [
				'Tableau de bord simplifié',
				'Inventaires automatique',
				'Arrivage',
				'Requête',
				'Gestion de Stock Standard',
				'Regles panier',
				'Alerte de rupture de stock',
				'Autorisations à plusieurs niveaux',
				'Assistance premium',
				'Règles panier',
				'Commande boutique',
				'Gestion produit Prestashop',
				'Challenge Collaborateur',
				'Gamme liquide',
				'Testeurs'
			],
			unactiveFeatures: [],
			button: {
				text: 'Get started',
				href: '#'
			}
		}
	];
</script>

<article class="flex justify-evenly flex-wrap py-5">
	{#each plans as plan}
		<Card padding="xl" class="mb-5">
			<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.title}</h5>
			<div class="flex items-baseline text-gray-900 dark:text-white">
				<span class="text-5xl font-extrabold tracking-tight">{plan.price}</span>
				<span class="text-3xl font-semibold">€</span>
				<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mois</span>
			</div>
			<ul class="my-7 space-y-4">
				{#each plan.activeFeatures as activeFeature}
					<li class="flex space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6 text-blue-600 dark:text-blue-500"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/></svg
						>
						<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
							>{activeFeature}</span
						>
					</li>
				{/each}
				{#each plan.unactiveFeatures as unactiveFeature}
					<li class="flex space-x-2 line-through decoration-gray-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="pink"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>

						<span class="text-base font-normal leading-tight text-gray-500">{unactiveFeature}</span>
					</li>
				{/each}
			</ul>
			<Button class="w-full">Choose plan</Button>
		</Card>
	{/each}
</article>
