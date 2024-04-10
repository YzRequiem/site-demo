<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Réaliser une vente.pdf',
		fileName: 'Réaliser une vente.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/4v8QpSv9TF4?si=_e_q-IwS_MwCOyvL"
		title="Réaliser une vente"
		texte="Pour réaliser une vente, suivez les étapes suivantes."
	/>
</main>
