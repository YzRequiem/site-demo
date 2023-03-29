<script>
	import ArticleTwo from '$lib/components/ArticleTwo.svelte';
	import HomeBanners from '$lib/components/HomeBanners.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import ArticleDeuxImg from '$lib/components/ArticleDeuxImg.svelte';
	import HeadingAccordion from '$lib/components/HeadingAccordion.svelte';
	import ArticleCarrousel from '$lib/components/ArticleCarrousel.svelte';

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
	
</script>
<div class="dark:text-white dark:bg-slate-900">

	<HomeBanners />
	
	<Accordion {imagesTabAccordion} {sectionsTabAccordion} />

	<ArticleDeuxImg {imgListDeuxImages} />
	
	<HeadingAccordion />
	
	<ArticleTwo />
	
	<ArticleCarrousel />

	
	
</div>