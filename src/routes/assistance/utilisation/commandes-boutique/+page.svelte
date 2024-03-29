<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Gérer une commande boutique.pdf',
		fileName: 'Gérer une commande boutique.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/76aNYM6PD_M?si=9LhYOpBebsrLlRdR"
		title="Gérer une commande boutique"
		texte="Pour gérer une commande boutique, suivez les étapes suivantes."
	/>
</main>
