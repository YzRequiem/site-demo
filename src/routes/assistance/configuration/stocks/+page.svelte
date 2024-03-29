<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Configurer les stocks, franchises, entités et la facturation.pdf',
		fileName: 'Configurer les stocks, franchises, entités et la facturation.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/zHhb5taphQQ?si=emwC3A-MYwo6T2WZ"
		title="Configurer les stocks, franchises, entités et la facturation"
		texte="Pour configurer les stocks, franchises, entités et la facturation, suivez les étapes suivantes."
	/>
</main>
