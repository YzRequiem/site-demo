<script>
	import ThreeIcons from '$lib/components/ThreeIcons.svelte';
	import { page } from '$app/stores';

	// store the current page name to display it in the header
	let pageName = $page.url.pathname
		.split('/')
		.filter((segment) => segment !== '')
		.pop();
	pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

	let header3icons = {
		title: pageName,
		content: ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum.'
	};

	let currentPath = $page.url.pathname;

	let tabIcons = [
		{
			title: 'Configurer les stocks',
			href: currentPath + '/configurer'
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
			href: currentPath + '/inventaire'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
