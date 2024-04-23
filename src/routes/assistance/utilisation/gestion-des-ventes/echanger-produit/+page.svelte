<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Faire un retour  échange ou avoir.pdf',
		fileName: 'Faire un retour  échange ou avoir.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/wLICoRHvKOc?si=5yw7YmWhYCrUK2R9"
		title="Faire un retour échange ou un avoir"
		texte="Pour faire un retour échange ou un avoir, suivez les étapes suivantes."
	/>
</main>
