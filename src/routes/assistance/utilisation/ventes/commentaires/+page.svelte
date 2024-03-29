<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Commentaire sur une vente avec compte et sans compte.pdf',
		fileName: 'Commentaire sur une vente avec compte et sans compte.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/3Zo3Eeo8yjY?si=yfwuHomJd3bKg1NV"
		title="Ajouter des commentaires de vente"
		texte="Pour ajouter des commentaires à une vente, suivez les étapes suivantes."
	/>
</main>
