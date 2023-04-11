<script>
	import ButtonOne from "./ButtonOne.svelte";


	 export let tabCTA = {}
	 export let borderImage = 'sm:rounded-tl-[30px] md:rounded-tl-[60px]'
	export let layout = 'xl:flex-row'
	 export  let buttonAttributs = {};


    // export let tabCTA =
    
    //     {
    //         title: 'Maitrisez vos stocks',
    //         content: "Toute la chaîne de vie d'un produit au sein de l'entreprise est gérée par l'application, de son arrivée au dépôt à sa remise au client lors de la finalisation de la vente.Grâce à un algorithme de prévision des besoins basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. De fait, tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures dans le même temps ! ",
    //         src: '/entrepot.jpg',
    //         alt: 'Entrepot',
	// 		buttonHref: '#',
	// 		buttonText: 'Get Started Today'
    //     }
    

</script>

<section class="overflow-hidden bg-transparent flex {layout} flex-col justify-evenly sm:items-center py-5">
	<div class="p-8 md:p-12 lg:px-16 lg:py-24 ">
		<div class="mx-auto max-w-xl text-center sm:text-left">
			<h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-200">
				{tabCTA.title}
			</h2>

			<p class="hidden text-gray-500 md:mt-4 md:block dark:text-gray-400">
				{tabCTA.content}
			</p>

			<div class="mt-4 md:mt-8">
				<ButtonOne {buttonAttributs} />
			</div>
		</div>
	</div>

	<img
		alt={tabCTA.alt}
		src={tabCTA.src}
		class="h-full 2xl:max-w-5xl max-w-xl object-cover sm:h-[calc(100%_-_2rem)] sm:self-center  md:h-[calc(100%_-_4rem)] {borderImage} "
	/>
</section>
