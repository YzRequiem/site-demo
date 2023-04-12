<script>
	import ArticleTwo from '$lib/components/ArticleTwo.svelte';
	import HomeBanners from '$lib/components/HomeBanners.svelte';
	import ThreeIcons from '$lib/components/ThreeIcons.svelte';
	import SectionImgRight from '$lib/components/SectionImgRight.svelte';
	import SVGdivider from '$lib/components/SVGdivider.svelte';
	import Cta from '$lib/components/CTA.svelte';
	import LeftCta from '$lib/components/LeftCTA.svelte';
	import TextBanner from '../lib/components/TextBanner.svelte';


let ctaStocks = {
            title: 'Maitrisez vos stocks',
            content: "Toute la chaîne de vie d'un produit au sein de l'entreprise est gérée par l'application, de son arrivée au dépôt à sa remise au client lors de la finalisation de la vente. Grâce à un algorithme de prévision des besoins basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. De fait, tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures dans le même temps ! ",
            src: '/entrepot.jpg',
            alt: 'Entrepot',
			buttonHref: '/offres',
			buttonText: 'Get Started Today'
}
	
let ctaVentes  =	{
		title: 'Optimizez vos ventes',
		content: "Nous fournissons des données dynamiques sur chaque magasin et au niveau du groupe afin d'établir une source unique de vérité sur vos informations. Ces données analytiques au niveau des articles permettent d'améliorer la précision des stocks, de maximiser la disponibilité des articles dans l'espace de vente et de réduire les ruptures de stock afin d'optimiser les ventes, la fidélité à la marque et l'expérience client. Grâce à une fiche client optimisée à son maximum cela vous permettra d’accéder instantanément aux informations concernant chaque client, ce qui vous fait gagner un temps précieux. En analysant votre fichier client, vous pouvez anticiper les besoins de vos clients et leur apporter des solutions adaptées à leurs besoins. Pour améliorer la satisfaction de vos clients, il est important de trier l’information afin de ne retenir que les données vraiment utiles à vos relations commerciale.",
		src: '/vente.webp',
		alt: 'Vente',
		buttonHref: '/offres',
		buttonText: 'Get Started Today'
}

let communication = {
		title: 'Communiquez avec vos equipes !',
		content:
			"Communiquez et partagez des documments avec vos équipes en temps réel à partir de notre appareil de communication interne à l'application. ",
		src: '/comunicate.jpg',
		alt: 'comunicate',
		buttonHref: '#',
		buttonText: 'Get Started Today'
};

let header3icons = {
		title: 'Gérez votre commerce en toute simplicité',
		content:
			"Notre application répond aux besoins spécifiques des propriétaires de commerce en leur offrant un système de gestion des stocks efficace, des statistiques de ventes en temps réel et un optimisateur de vente performant. Gérez votre commerce en toute simplicité grâce à notre solution complète."
	};
	
let tabIcons = [
		{
			title: 'Gestion de stock efficace',
			src: '/svg/box.svg',
			alt: 'Stock',
			width : 'w-14 h-14',
		},
		{
			title: 'Statistiques de ventes en temps réel',
			src: '/svg/stats.svg',
			alt: 'Statistiques',
			width : 'w-14 h-14'
		},
		{
			title: 'Optimisateur de ventes',
			src: '/svg/fuse.svg',
			alt: 'Fusée',
			width : 'w-14 h-14'
		}
];

// partenaires

// let headerPartenaires  = {
// 		title: 'Nos Partenaires',
// 		content:	''
// 	};
	

// let tabIconsPartenaires = [
// 		{
// 			title: '',
// 			src: '/e-tasty.webp',
// 			alt: 'e-tasty',
// 			bgbox: 'bg-white'
// 		},
// 		{
// 			title: '',
// 			src: '/joshnoa.webp',
// 			alt: 'joshnoa',
// 			bgbox: 'bg-white'
// 		},
// 		{
// 			title: '',
// 			src: '/kumulus.webp',
// 			alt: 'kumulus_vape',
// 			bgbox: 'bg-white'
// 		}
// 	];

</script>
<div class="dark:text-white dark:bg-gray-900">

	<HomeBanners />

	<SectionImgRight />

	<SVGdivider />

	<ThreeIcons header={header3icons} iconsTab={tabIcons} />

	<Cta tabCTA = {ctaStocks} />

	<LeftCta />

	<Cta tabCTA = {ctaVentes} />

	<TextBanner />
	
	<ArticleTwo obj = {communication} />

	<!-- section partenaire -->
	
	<!-- <ThreeIcons header={headerPartenaires} iconsTab={tabIconsPartenaires} /> -->
		
	
</div>