<script>
	export let boxesContent = [
		{
			title: 'Communiquez avec vos Equipes',
			content:
				'Centralisez la communication entre collaborateur grâce à un tchat interne',
			src: '/svg/chapeau.svg'	,
			alt: 'Chapeau'
		},
		{
			title: 'Collaboration',
			content:
				"Collaborez efficacement en ayant une vision claire de tout votre travail. Restez maître du temps grâce à des automatisations faciles à utiliser.",
				src: '/svg/chapeau.svg'	,
			alt: 'Chapeau'
		},
		{
			title: 'Productivité',
			content:
				'Économisez un temps précieux en automatisant les processus de vente',
				src: '/svg/chapeau.svg'	,
			alt: 'Chapeau'
		},
		{
			title: 'Fusion entre les doublons',
			content:
				'Recevez des alertes lorsque vous saisissez un prospect ou un compte en double. Supprimez les doublons en identifiant et en fusionnant les prospects et les contacts en double.',
				src: '/svg/chapeau.svg'	,
			alt: 'Chapeau'
		},
		{
			title: 'Prévision de vente',
			content:
				"Exploitez les rapports pour comparer les prévisions aux ventes réelles et analysez les prévisions par mois, par représentant commercial ou tout autre critère.",
				src: '/svg/chapeau.svg'	,
			alt: 'Chapeau'
		},
		{
			title: "Objectifs d'équipe",
			content:
				"Gérez les quotas de votre équipe dans le temps, suivez les victoires et visualisez les objectifs pour des utilisateurs spécifiques ou pour l'ensemble de l'équipe.",
				src: '/svg/chapeau.svg'	,
			alt: 'Chapeau'
		}
	];
</script>

<section class="bg-gray-900 text-white" >

	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
		<div class="mx-auto max-w-lg text-center">
			<h2 class="text-3xl font-bold sm:text-4xl">Bénéficiez d'une vue d'ensemble</h2>

			<p class="mt-4 text-gray-300">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
				nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
			</p>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each boxesContent as box}
				 
				<a
					class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
					href="#"
				>
					
				<img class="h-10 w-10 fill-pink-500" src={box.src} alt={box.alt}/>
				

					<h3 class="text-xl font-bold mb-2">{box.title}</h3>

					<p class="text-gray-300">{box.content}</p>
				</a>

			{/each}
		</div>
	</div>

</section>


