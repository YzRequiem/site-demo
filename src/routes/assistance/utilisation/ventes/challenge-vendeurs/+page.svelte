<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Créer des challenges vendeurs.pdf',
		fileName: 'Créer des challenges vendeurs.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		title="Créer des challenges vendeurs"
		texte="Pour créer des challenges vendeurs, suivez les étapes suivantes."
	/>
</main>
