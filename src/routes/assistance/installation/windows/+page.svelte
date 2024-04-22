<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		title="Installation Windows"
		texte="Pour installer le logiciel sur votre ordinateur, suivez les étapes suivantes."
		pdf={{
			link: '/pdf/Installation Silver Stock sur Windows.pdf',
			fileName: 'Installation Silver Stock sur Windows.pdf'
		}}
		downloadLink="https://github.com/Silver-Smok/silverstock-electron-app/releases/download/v1.0.2/SilverStock-1.0.2-Setup.exe"
	/>
</main>
