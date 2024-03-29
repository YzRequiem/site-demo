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
			title: 'Réaliser une vente',
			href: currentPath + '/creer'
		},
		{
			title: 'Ajouter un client à une vente',
			href: currentPath + '/ajouter-un-client'
		},
		{
			title: 'Envoyer un reçu par email',
			href: currentPath + '/email'
		},
		{
			title: 'Imprimer un ticket de caisse',
			href: currentPath + '/ticket-de-caisse'
		},
		{
			title: 'Echanger ou rembourser un produit',
			href: currentPath + '/echanger-produit'
		},
		{
			title: 'Ajouter des commentaires de vente',
			href: currentPath + '/commentaires'
		},
		{
			title: 'Créer des challenges vendeurs',
			href: currentPath + '/challenge-vendeurs'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
