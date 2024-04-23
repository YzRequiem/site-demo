<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Valider les inventaires.pdf',
		fileName: 'Valider les inventaires.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/K0y20r8RRP4?si=1z7pV8lKifAhyun9"
		title="Valider un inventaire"
		texte="Pour valider un inventaire, suivez les étapes suivantes."
	/>
</main>
