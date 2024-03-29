<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Rechercher un client.pdf',
		fileName: 'Rechercher un client.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/R4KT5n__Sak?si=CxlYSKrzEtrxy2LL"
		title="Rechercher des clients"
		texte="Pour rechercher des clients, suivez les étapes suivantes."
	/>
</main>
