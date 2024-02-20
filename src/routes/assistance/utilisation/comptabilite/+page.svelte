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
			title: 'Gérer le fond de caisse',
			href: currentPath + '/fond-de-caisse'
		},
		{
			title: 'Effectuer une Clôture',
			href: currentPath + '/cloture'
		},
		{
			title: 'Editer un journal de caisse',
			href: currentPath + '/journal-de-caisse'
		},
		{
			title: 'Corriger une vente validée (modifier paiement)',
			href: currentPath + '/correction-vente'
		},
		{
			title: 'Gérer les factures',
			href: currentPath + '/factures'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
