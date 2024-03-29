<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Imprimer ticket de caisse.pdf',
		fileName: 'Imprimer ticket de caisse.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/HtQh0IR_9r0?si=jGOCmMnclXoeicTd"
		title="Imprimer un ticket de caisse"
		texte="Pour imprimer un ticket de caisse, suivez les étapes suivantes."
	/>
</main>
