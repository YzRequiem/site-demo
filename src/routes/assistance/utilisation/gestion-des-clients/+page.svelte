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
			title: 'Créer un client',
			href: currentPath + '/creer'
		},
		{
			title: 'Importer des clients',
			href: currentPath + '/importer'
		},
		{
			title: 'Rechercher des clients',
			href: currentPath + '/rechercher'
		},
		{
			title: 'Supprimer un client',
			href: currentPath + '/supprimer'
		},
		{
			title: 'Fusionner des clients en doublons',
			href: currentPath + '/fusionner-doublons'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
