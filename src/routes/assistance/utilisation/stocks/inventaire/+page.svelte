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
			title: 'Demander un inventaire',
			href: currentPath + '/demander'
		},
		{
			title: 'Réaliser un inventaire',
			href: currentPath + '/realiser'
		},
		{
			title: 'Valider un inventaire',
			href: currentPath + '/valider'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
