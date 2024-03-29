<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Ajouter un client à une vente.pdf',
		fileName: 'Ajouter un client à une vente.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/JUqSiVzvG60?si=EWShAeYU7x2_hEWW"
		title="Ajouter un client à une vente"
		texte="Pour ajouter un client à une vente, suivez les étapes suivantes."
	/>
</main>
