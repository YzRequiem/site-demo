<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Supprimer un compte client.pdf',
		fileName: 'Supprimer un compte client.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/8UkTdORtlLQ?si=KhffiIO1KS1s14BS"
		title="Supprimer un compte client"
		texte="Pour supprimer un compte client, suivez les étapes suivantes."
	/>
</main>
