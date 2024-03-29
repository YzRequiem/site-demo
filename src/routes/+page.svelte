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
			'Notre application répond aux besoins spécifiques des propriétaires de commerce en leur offrant un système de gestion des stocks efficace, des statistiques de ventes en temps réel et un optimisateur de vente performant. Gérez votre commerce en toute simplicité grâce à notre solution complète.'
	};

	let tabIcons = [
		{
			title: 'Gestion de stock efficace',
			src: '/svg/box.svg',
			alt: 'Stock',
			width: 'w-14 h-14',
			href: '#stock'
		},
		{
			title: 'Statistiques de ventes en temps réel',
			src: '/svg/stats.svg',
			alt: 'Statistiques',
			width: 'w-14 h-14',
			href: '#info'
		},
		{
			title: 'Optimisateur de ventes',
			src: '/svg/fuse.svg',
			alt: 'Fusée',
			width: 'w-14 h-14',
			href: '#ventes'
		}
	];

	let ctaStocks = {
		title: 'Maitrisez vos stocks',
		content:
			"Au sein de l'entreprise, toute la chaîne de vie d'un produit, de son arrivée au dépôt jusqu'à sa remise au client, est gérée par l'application. Grâce à un algorithme de prévision des besoins, basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. Tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures.",
		src: '/entrepot.jpg',
		alt: 'Entrepot'
	};

	let ctaVentes = {
		title: 'Optimisez vos ventes',
		content:
			"Nous fournissons des données dynamiques pour chaque magasin et groupe. Elles permettent d’améliorer la précision des stocks et la disponibilité des articles pour optimiser les ventes, la fidélité et l'expérience client. Grâce aux fiches client optimisées, vous pouvez accéder instantanément aux informations de chaque client pour anticiper ses besoins et lui fournir des solutions adaptées, améliorant ainsi sa satisfaction.",
		src: '/magasin2.png',
		alt: 'Vente'
	};

	let communication = {
		title: 'Communiquez avec vos equipes !',
		content:
			"Communiquez et partagez des documments avec vos équipes en temps réel à partir de notre appareil de communication interne à l'application. ",
		src: '/comunicate.jpg',
		alt: 'comunicate'
	};

	let buttonCta = {
		href: '/contact',
		text: 'En savoir plus'
	};

	let buttonCom = {
		href: '/contact',
		text: 'Contactez Nous'
	};
</script>

<div class="dark:text-white dark:bg-gray-900">
	<HomeBanners />
	<SectionImgRight />
	<SVGdivider />
	<ThreeIcons header={header3icons} iconsTab={tabIcons} />
	<div id="stock" />
	<Cta tabCTA={ctaStocks} buttonAttributs={buttonCta} />
	<div id="info" />
	<LeftCta />
	<div id="ventes" />
	<Cta tabCTA={ctaVentes} buttonAttributs={buttonCta} />
	<TextBanner />
	<ArticleTwo obj={communication} buttonAttributs={buttonCom} />
</div>
