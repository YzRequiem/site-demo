<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Créer des règles paniers.pdf',
		fileName: 'Créer des règles paniers.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		$
		title="Créer des règles paniers"
		texte="Pour créer des règles paniers, suivez les étapes suivantes."
	/>
</main>
