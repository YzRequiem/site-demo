<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Completer un inventaire.pdf',
		fileName: 'Completer un inventaire.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/Uy0gC7lrhNA?si=nAva9OBtPEfoTlEO"
		title="Réaliser un inventaire"
		texte="Pour réaliser un inventaire, suivez les étapes suivantes."
	/>
</main>
