<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Importer des clients.pdf',
		fileName: 'Importer des clients.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		title="Importer des clients"
		texte="Pour importer des clients, suivez les étapes suivantes."
	/>
</main>
