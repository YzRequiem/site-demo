<script>
	import ThreeIcons from '$lib/components/ThreeIcons.svelte';
	import { page } from '$app/stores';

	let header3icons = {
		title: "Besoin d'aide ?"
	};

	let currentPath = $page.url.pathname;

	let tabIcons = [
		{
			title: 'Installation',
			href: currentPath + '/installation',
			src: '/svg/install.svg',
			alt: 'Installation',
			width: 'w-16 h-16'
		},
		{
			title: 'Configuration',
			href: currentPath + '/configuration',
			src: '/svg/gear.svg',
			alt: 'Configuration',
			width: 'w-16 h-16'
		},
		{
			title: 'Utilisation',
			href: currentPath + '/utilisation',
			src: '/svg/user.svg',
			alt: 'Utilisation',
			width: 'w-16 h-16'
		}
	];
</script>

<!-- svelte-ignore missing-declaration -->
<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
</main>
