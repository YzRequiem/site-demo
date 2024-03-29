<script>
	import Tutoriel from '$lib/components/tutoriel.svelte';
	export let pdf = {
		link: "/pdf/Création d'un utilisateur et première connexion.pdf",
		fileName: "Création d'un utilisateur et première connexion.pdf"
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/91nPIcwf7LY?si=Xmtcmnv2NbX8riWE"
		title="Création d'un utilisateur et première connexion"
		texte="Pour créer un nouvel utilisateur et effectuer votre première connexion, suivez les étapes suivantes."
	/>
</main>
