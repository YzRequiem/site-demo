<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Cloturer une journée.pdf',
		fileName: 'Cloturer une journée.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/HL-KaATk4Xs?si=ODfvGE-I2GzwV5yE"
		title="Cloturer une journée"
		texte="Pour Cloturer une journée, suivez les étapes suivantes."
	/>
</main>
