<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Créer des requêtes produits.pdf',
		fileName: 'Créer des requêtes produits.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		title="Créer des requêtes produits"
		texte="Pour gérer la création de requêtes, suivez les étapes suivantes."
	/>
</main>
