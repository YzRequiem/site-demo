<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: "/pdf/Création d'un réassort.pdf",
		fileName: "Création d'un réassort.pdf"
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/YYc4ax1RT0U?si=kGp5WzMWufW7_WoP"
		title="Création d'un réassort"
		texte="Pour créer un réassort, suivez les étapes suivantes."
	/>
</main>
