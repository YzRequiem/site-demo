<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Corriger une vente validée.pdf',
		fileName: 'Corriger une vente validée.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/leXwXLSipeA?si=F-8D2MZpU9e6tPu5"
		title="Corriger une vente validée (modifier paiement)"
		texte="Pour corriger une vente validée, suivez les étapes suivantes."
	/>
</main>
