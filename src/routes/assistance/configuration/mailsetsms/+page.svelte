<script>
	import Tutoriel from '$lib/components/Tutoriel.svelte';
	export let pdf = {
		link: '/pdf/Configurer les mails et SMS.pdf',
		fileName: 'Configurer les mails et SMS.pdf'
	};
</script>

<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<Tutoriel
		{pdf}
		src="https://www.youtube.com/embed/_I0b2HTAVT0?si=sXxPNyPYsFDzW4S0"
		title="Configurer les mails et les SMS à destination des clients"
		texte="Pour configurer les mails et les SMS à destination des clients, suivez les étapes suivantes."
	/>
</main>
