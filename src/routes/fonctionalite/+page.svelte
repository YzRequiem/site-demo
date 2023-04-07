<script>
	import SvGdivider from '$lib/components/SVGdivider.svelte';
	import SixBoxes from '$lib/components/SixBoxes.svelte';
    import Accordion from '$lib/components/Accordion.svelte';
    import ArticleDeuxImg from '$lib/components/ArticleDeuxImg.svelte';
    import HeadingAccordion from '$lib/components/HeadingAccordion.svelte';
    import ArticleTwo from '$lib/components/ArticleTwo.svelte';
    import ArticleCarrousel from '$lib/components/ArticleCarrousel.svelte';    
	import HeadingTitle from '../../lib/components/HeadingTitle.svelte';
	import ThreeIcons from '../../lib/components/ThreeIcons.svelte';
    
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

let header3icons = {
		title: 'SilverStock ce veut d\'être une application sécurisée',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.'
	};
	
let tabIcons = [
		{
			title: 'Droits d\'accès personnalisés',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.',
			src: '/svg/box.svg',
			alt: 'Stock',
			width : 'w-14 h-14',
		},
		{
			title: 'Controle IP',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.',
			src: '/svg/stats.svg',
			alt: 'Statistiques',
			width : 'w-14 h-14'
		},
		{
			title: 'Systeme d\'authentification forte',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.',
			src: '/svg/fuse.svg',
			alt: 'Fusée',
			width : 'w-14 h-14'
		}
];

let titleManagement = "Management d'equipes"
let titleProduct = "Gestion de produits"
let titleClient = "Gestion de clients"
let titleParameters = "Secutrité et paramètres"
</script>


<main class="bg-gray-900">

    <section class="bg-image h-screen flex flex-col">
        <div class=" h-28 flex items-center justify-center">
            <h2
                class="text-2xl xl:text-4xl text-center  text-white"
            >
            DES CAPACITÉS MULTIPLES, UNE CAISSE ENREGISTREUSE EN LIGNE INTELLIGENTE
            </h2>

        </div>
    </section>

    <SvGdivider />
    
    <SixBoxes />

    <Accordion {imagesTabAccordion} {sectionsTabAccordion} />
	
        
	<HeadingAccordion />
        
    <section class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleManagement} />
        </div>
    </section>

    <ArticleTwo obj = {communication} /> 


	<ArticleDeuxImg header = {headerVendeurs} {imgListDeuxImages} />

    <section class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleProduct} />
        </div>
    </section>
	
    <ArticleCarrousel />

    <section class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleClient} />
        </div>
    </section>

    <section class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleParameters} />
        </div>
    </section>

    <ThreeIcons header={header3icons} iconsTab={tabIcons} />
    

</main>

<style>
    .bg-image {
        background-image: url('/ordiApp.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        }
</style>