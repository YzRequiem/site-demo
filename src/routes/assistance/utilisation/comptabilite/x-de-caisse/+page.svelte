<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Éditer un X de caisse.pdf',
		fileName: 'Éditer un X de caisse.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/UDzxzccDGDM?si=b3n6TAp-HvywIt5_"
		title="Éditer un X de caisse"
		texte="Pour éditer un X de caisse, suivez les étapes suivantes."
	/>
</main>
