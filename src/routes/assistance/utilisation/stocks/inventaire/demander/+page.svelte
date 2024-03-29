<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Demander un inventaire.pdf',
		fileName: 'Demander un inventaire.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/k9lif_pEjvw?si=8JBDnfDZQctsNz0-"
		title="Demander un inventaire"
		texte="Pour demander un inventaire, suivez les étapes suivantes."
	/>
</main>
