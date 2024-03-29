<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Fusionner un compte client.pdf',
		fileName: 'Fusionner un compte client.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/EObge-yu2mI?si=LtFEduP2_yF7TyNt"
		title="Fusionner deux comptes clients"
		texte="Pour fusionner deux comptes clients, suivez les étapes suivantes."
	/>
</main>
