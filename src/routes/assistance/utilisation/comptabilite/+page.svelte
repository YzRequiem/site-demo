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
			title: 'Gérer le fond de caisse',
			href: currentPath + '/fond-de-caisse'
		},
		{
			title: 'Effectuer une Clôture de journée',
			href: currentPath + '/cloture'
		},
		{
			title: 'Editer un X de caisse',
			href: currentPath + '/x-de-caisse'
		},
		{
			title: 'Corriger une vente validée (modifier paiement)',
			href: currentPath + '/correction-vente'
		},
		{
			title: 'Editer une facture et un récaputulatif de facture',
			href: currentPath + '/factures'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
