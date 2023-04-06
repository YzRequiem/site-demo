<script>
	import ArticleTwo from '$lib/components/ArticleTwo.svelte';
	import HomeBanners from '$lib/components/HomeBanners.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import ArticleDeuxImg from '$lib/components/ArticleDeuxImg.svelte';
	import HeadingAccordion from '$lib/components/HeadingAccordion.svelte';
	import ArticleCarrousel from '$lib/components/ArticleCarrousel.svelte';
	import ThreeIcons from '$lib/components/ThreeIcons.svelte';
	import SectionImgRight from '$lib/components/SectionImgRight.svelte';
	import SVGdivider from '$lib/components/SVGdivider.svelte';
	import Cta from '$lib/components/CTA.svelte';
	import LeftCta from '$lib/components/LeftCTA.svelte';
	import Statistics from '$lib/components/Statistics.svelte';

	let imagesTabAccordion  = [
	
		'/appStats1.png',
		'/appStats2.png',
		'/appStats3.png',
		'/appStats4.png',
		'/appStats5.png'
	];

	let sectionsTabAccordion = [
		{
			title: 'Stats',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
		},
		{
			title: 'Ventes en attente',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
		},
		{
			title: 'Ventes cloturées',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
		},
		{
			title: 'Les commentaires ',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
		},
		{
			title: 'Statistiques Produits',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
		}
	];

	let imgListDeuxImages = [
		{
			src: '/appstatpart2.png',
			alt: 'Statistique 1'
		},
		{
			src: '/appstatpart2-1.png',
			alt: 'Statistique 2'
		}
	];

	let ctaStocks =
    
        {
            title: 'Maitrisez vos stocks',
            content: "Toute la chaîne de vie d'un produit au sein de l'entreprise est gérée par l'application, de son arrivée au dépôt à sa remise au client lors de la finalisation de la vente.Grâce à un algorithme de prévision des besoins basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. De fait, tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures dans le même temps ! ",
            src: '/entrepot.jpg',
            alt: 'Entrepot',
			buttonHref: '#',
			buttonText: 'Get Started Today'
        }
	
		let ctaVentes  =
    
	{
		title: 'Optimizez vos ventes',
		content: "Grâce à une fiche client optimisée à son maximum cela vous permettra d’accéder instantanément aux informations concernant chaque client, ce qui vous fait gagner un temps précieux. En analysant votre fichier client, vous pouvez anticiper les besoins de vos clients et leur apporter des solutions adaptées à leurs besoins. Pour améliorer la satisfaction de vos clients, il est important de trier l’information afin de ne retenir que les données vraiment utiles à vos relations commerciales.",
		src: '/vente.webp',
		alt: 'Vente',
		buttonHref: '#',
		buttonText: 'Get Started Today'
	}

</script>
<div class="dark:text-white dark:bg-gray-900">

	<HomeBanners />

	<SectionImgRight />

	<SVGdivider />

	<ThreeIcons />

	<Cta tabCTA = {ctaStocks} />

	<LeftCta />

	<Cta tabCTA = {ctaVentes} />

	<Accordion {imagesTabAccordion} {sectionsTabAccordion} />
	
	<ArticleDeuxImg {imgListDeuxImages} />
	
	<HeadingAccordion />
	
	<ArticleTwo />
	
	<ArticleCarrousel />

		
	
</div>