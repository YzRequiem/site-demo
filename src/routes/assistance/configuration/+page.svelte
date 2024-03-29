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
		title: pageName
	};

	let currentPath = $page.url.pathname;

	let tabIcons = [
		{
			title: "Création d'un utilisateur et première connexion",
			href: currentPath + '/connexion'
		},
		{
			title: 'Configurer les stocks, franchises, entités et la facturation',
			href: currentPath + '/stocks/'
		},
		{
			title: 'Configurer les règles paniers',
			href: currentPath + '/regles-paniers/'
		},
		{
			title: 'Configurer les mails et les SMS à destination des clients',
			href: currentPath + '/mailsetsms/'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
