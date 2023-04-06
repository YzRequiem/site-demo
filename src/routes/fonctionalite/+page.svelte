<script>
	import SvGdivider from '$lib/components/SVGdivider.svelte';
	import SixBoxes from '$lib/components/SixBoxes.svelte';
    import Accordion from '$lib/components/Accordion.svelte';
    import ArticleDeuxImg from '$lib/components/ArticleDeuxImg.svelte';
    import HeadingAccordion from '$lib/components/HeadingAccordion.svelte';
    import ArticleTwo from '$lib/components/ArticleTwo.svelte';
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

let communication = {
		title: 'Communiquez avec vos equipes !',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.',
		src: '/message.jpg',
		alt: 'comunicate',
		buttonHref: '#',
		buttonText: 'Get Started Today'
};

let headerVendeurs = {
		title: 'Stats Vendeurs',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.',
		buttonTitle: 'Get Started Today',
		buttonHref: '/offres'
	};

</script>


<main class="bg-gray-900">
    <section class="bg-image h-screen flex flex-col">
        <div class=" h-24 flex items-center">
            <h2
                class="text-4xl font-bold text-center pt-10 text-white"
            >
            DES CAPACITÉS MULTIPLES, UNE CAISSE ENREGISTREUSE EN LIGNE INTELLIGENTE
            </h2>

        </div>
        

      
    </section>

        <SvGdivider />
    
        <SixBoxes />

        <Accordion {imagesTabAccordion} {sectionsTabAccordion} />
	
	    <ArticleDeuxImg header = {headerVendeurs} {imgListDeuxImages} />
	
	    <HeadingAccordion />
	
	    <ArticleTwo obj = {communication} /> 
	
	    <ArticleCarrousel />

</main>

<style>
    .bg-image {
        background-image: url('/ordiApp.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        }
</style>