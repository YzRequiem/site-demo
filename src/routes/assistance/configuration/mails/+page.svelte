<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: '/pdf/ConfigurerlesmailsetlesSMS.pdf',
		fileName: 'Installer le PDF'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		videoSrc="/videos/ConfigurationMailetSMS.mp4"
		title="Installation MacOs"
		texte="Pour installer le logiciel sur votre ordinateur, suivez les étapes suivantes."
	/>
</main>
