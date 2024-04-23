<script>
	import ThreeIcons from '$lib/components/ThreeIcons.svelte';
	import { page } from '$app/stores';

	// store the current page name to display it in the header
	let pageName = $page.url.pathname
		.split('/')
		.filter((segment) => segment !== '')
		.pop();
	pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
	pageName = pageName.replace(/-/g, ' ');

	let header3icons = {
		title: pageName
	};

	let currentPath = $page.url.pathname;

	let tabIcons = [
		{
			title: 'Créer un fournisseur',
			href: currentPath + '/fournisseur'
		},
		{
			title: 'Créer une déclinaison',
			href: currentPath + '/declinaison'
		},
		{
			title: 'Créer un produit',
			href: currentPath + '/produit'
		},
		{
			title: 'Créer une catégorie',
			href: currentPath + '/categories'
		},
		{
			title: 'Créer une marque',
			href: currentPath + '/marques'
		},
		{
			title: 'Créer un arrivage',
			href: currentPath + '/arrivage'
		},
		{
			title: 'Créer un transfert',
			href: currentPath + '/transfert'
		},
		{
			title: 'Créer un réassort',
			href: currentPath + '/reassort'
		},
		{
			title: 'Gérer les inventaires',
			href: currentPath + '/gerer-les-inventaires'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
