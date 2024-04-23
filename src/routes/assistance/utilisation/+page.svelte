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
			title: 'Gestion des stocks',
			href: currentPath + '/gestion-des-stocks',
			src: '/svg/box.svg',
			alt: 'Stocks',
			width: 'w-16 h-16'
		},
		{
			title: 'Gestion des clients',
			href: currentPath + '/gestion-des-clients',
			src: '/svg/user.svg',
			alt: 'Clients',
			width: 'w-16 h-16'
		},
		{
			title: 'Gestion des ventes',
			href: currentPath + '/gestion-des-ventes',
			src: '/svg/creditCard.svg',
			alt: 'Carte bleue',
			width: 'w-16 h-16'
		},
		{
			title: 'Comptabilité',
			href: currentPath + '/comptabilite',
			src: '/svg/compta.svg',
			alt: 'Comptabilité',
			width: 'w-16 h-16'
		},
		{
			title: 'Commandes boutique',
			href: currentPath + '/commandes-boutique',
			src: '/svg/cart.svg',
			alt: 'panier',
			width: 'w-16 h-16'
		},
		{
			title: 'Requêtes',
			href: currentPath + '/requetes',
			src: '/svg/request.svg',
			alt: 'Requêtes',
			width: 'w-16 h-16'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
