<script>
	import ArticleTwo from '$lib/components/ArticleTwo.svelte';
	import HomeBanners from '$lib/components/HomeBanners.svelte';
	import ThreeIcons from '$lib/components/ThreeIcons.svelte';
	import SectionImgRight from '$lib/components/SectionImgRight.svelte';
	import SVGdivider from '$lib/components/SVGdivider.svelte';
	import Cta from '$lib/components/CTA.svelte';
	import LeftCta from '$lib/components/LeftCTA.svelte';
	import TextBanner from '../lib/components/TextBanner.svelte';

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
			href: '#stock'
		},
		{
			title: 'Statistiques de ventes en temps réel',
			src: '/svg/stats.svg',
			alt: 'Statistiques',
			width : 'w-14 h-14',
			href: '#info'
		},
		{
			title: 'Optimisateur de ventes',
			src: '/svg/fuse.svg',
			alt: 'Fusée',
			width : 'w-14 h-14',
			href: '#ventes'
		}
];

let ctaStocks = {
            title: 'Maitrisez vos stocks',
            content: "Toute la chaîne de vie d'un produit au sein de l'entreprise est gérée par l'application, de son arrivée au dépôt à sa remise au client lors de la finalisation de la vente. Grâce à un algorithme de prévision des besoins basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. De fait, tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures dans le même temps ! ",
            src: '/entrepot.jpg',
            alt: 'Entrepot',
}
	
let ctaVentes  =	{
		title: 'Optimizez vos ventes',
		content: "Nous fournissons des données dynamiques pour chaque magasin et groupe, améliorant la précision des stocks et la disponibilité des articles pour optimiser les ventes, la fidélité et l'expérience client. Une fiche client optimisée permet d'accéder instantanément aux informations de chaque client pour anticiper leurs besoins et leur fournir des solutions adaptées, améliorant ainsi leur satisfaction.",
		src: '/magasin2.png',
		alt: 'Vente',
}

let communication = {
		title: 'Communiquez avec vos equipes !',
		content:
			"Communiquez et partagez des documments avec vos équipes en temps réel à partir de notre appareil de communication interne à l'application. ",
		src: '/comunicate.jpg',
		alt: 'comunicate',
};

let buttonCta = {
     href: '/contact',
      text: "En savoir plus",
};

let buttonCom = {
	 href: '/contact',
	  text: "Contactez Nous",
};
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

	<div id="stock"></div>
	<Cta tabCTA = {ctaStocks} buttonAttributs={buttonCta}/>

	<div id ="info"></div>
	<LeftCta />

	<div id="ventes"></div>
	<Cta tabCTA = {ctaVentes} buttonAttributs={buttonCta} />

	<TextBanner />
	
	<ArticleTwo obj = {communication} buttonAttributs={buttonCom} />

	<!-- section partenaire -->
	
	<!-- <ThreeIcons header={headerPartenaires} iconsTab={tabIconsPartenaires} /> -->
		
	
</div>