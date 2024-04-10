<script>
	export let tabCTA = {
		title: 'Informations en temps réel',
		content:
			' Pilotez en temps réel votre activité avec SilverStock. Une caisse intelligente avec des statistiques complètes basées sur toutes les données croisées pour une prise de décision simplifiée. Mais surtout, vous pouvez consulter vos chiffres, n’importe quand et n’importe où, à partir de tout type de matériel : un PC, un Mac ou une tablette.',
		src: '/statistics.png',
		alt: 'Entrepot'
	};
</script>

<section class="bg-white dark:bg-gray-900 flex">
	<div
		class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
	>
		<img class="w-full dark:hidden" src={tabCTA.src} alt={tabCTA.alt} />
		<img class="w-full hidden dark:block" src={tabCTA.src} alt="Dashboard" />
		<div class="mt-4 md:mt-0">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				{tabCTA.title}
			</h2>
			<p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
				{tabCTA.content}
			</p>
		</div>
	</div>
</section>
