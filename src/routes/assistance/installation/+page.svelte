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
			title: 'Windows',
			href: currentPath + '/windows'
		},
		{
			title: 'MacOS',
			href: currentPath + '/macos'
		}
	];
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
