<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Créer une fiche client.pdf',
		fileName: 'Créer une fiche client.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/NQ1SYEbOK5A?si=0_XlWxGb35nNs7CI"
		title="Créer une fiche client"
		texte="Pour créer une fiche client, suivez les étapes suivantes."
	/>
</main>
