<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Installation Silver Stock sur macos.pdf',
		fileName: 'Installation Silver Stock sur macos'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		title="Installation MacOs"
		texte="Pour installer le logiciel sur votre ordinateur, suivez les étapes suivantes."
		downloadLink="https://github.com/Silver-Smok/silverstock-electron-app/releases/download/v1.0.2/SilverStock.dmg"
	/>
</main>
