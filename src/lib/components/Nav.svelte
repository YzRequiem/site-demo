<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';

	const navigation = [
		{ href: '/', label: 'Accueil' },
		{ href: '/fonctionnalite', label: 'Fonctionnalités' },
		{ href: '/entreprise', label: 'Entreprise' },
		// { href: '/offres', label: 'Offres' },
		// { href: '/assistance', label: 'Assistance' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<Navbar let:hidden let:toggle color="form">
	<NavBrand href="/">
		<img src="/notif-logo.png" class="mr-3 h-6 sm:h-9" alt="silver-stock Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>SilverStock</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />

	<NavUl {hidden}>
		{#each navigation as navItem}
			<NavLi href={navItem.href}>
				{navItem.label}
			</NavLi>
		{/each}
	</NavUl>

	<DarkMode />
</Navbar>
