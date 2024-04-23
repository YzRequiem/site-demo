<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Créer un transfert.pdf',
		fileName: 'Créer un transfert.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/pGoS6wnI6PI?si=JK7I_keBhyNq_oUd"
		title="Créer un transfert"
		texte="Pour créer un transfert, suivez les étapes suivantes."
	/>
</main>
