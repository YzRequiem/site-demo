<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Envoyer ticket par mail.pdf',
		fileName: 'Envoyer ticket par mail.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/tCw9qJzvfSY?si=z6o37VchmCm72PwK"
		title="Envoyer un ticket par email"
		texte="Pour envoyer un ticket par email, suivez les étapes suivantes."
	/>
</main>
