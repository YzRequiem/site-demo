<script>
	import SvGdivider from '$lib/components/SVGdivider.svelte';
	import SixBoxes from '$lib/components/SixBoxes.svelte';
    import Accordion from '$lib/components/Accordion.svelte';
    import HeadingAccordion from '$lib/components/HeadingAccordion.svelte';
    import ArticleTwo from '$lib/components/ArticleTwo.svelte';
    import ArticleCarrousel from '$lib/components/ArticleCarrousel.svelte';    
	import HeadingTitle from '$lib/components/HeadingTitle.svelte';
	import ThreeIcons from '$lib/components/ThreeIcons.svelte';
	import HeadingParagraph from '$lib/components/HeadingParagraph.svelte';
	import Cta from '$lib/components/CTA.svelte';
	import DeuxImages from '$lib/components/DeuxImages.svelte';
  
    /*----Section summary----*/
let boxesContent = [
		{
			title: 'Statistiques',
			content:
				'Centralisez la communication entre collaborateur grâce à un tchat interne',
			src: '/svg/chapeau.svg'	,
			alt: 'Statistiques',
            href:'#statistiques'
		},
		{
			title: 'Gestion des stocks',
			content:
				"Collaborez efficacement en ayant une vision claire de tout votre travail. Restez maître du temps grâce à des automatisations faciles à utiliser.",
				src: '/svg/chapeau.svg'	,
			alt: 'Stocks',
            href:'#Stocks'

		},
		{
			title: "Management d'équipes",
			content:
				'Économisez un temps précieux en automatisant les processus de vente',
				src: '/svg/chapeau.svg'	,
			alt: 'management',
            href:'#management'
		},
		{
			title: 'Gestion de produits',
			content:
				'Recevez des alertes lorsque vous saisissez un prospect ou un compte en double. Supprimez les doublons en identifiant et en fusionnant les prospects et les contacts en double.',
				src: '/svg/chapeau.svg'	,
			alt: 'produits',
            href:'#produits'
		},
		{
			title: 'Gestion de clients',
			content:
				"Exploitez les rapports pour comparer les prévisions aux ventes réelles et analysez les prévisions par mois, par représentant commercial ou tout autre critère.",
				src: '/svg/chapeau.svg'	,
			alt: 'clients',
            href:'#clients'
		},
		{
			title: "Secutrité et paramètres",
			content:
				"Gérez les quotas de votre équipe dans le temps, suivez les victoires et visualisez les objectifs pour des utilisateurs spécifiques ou pour l'ensemble de l'équipe.",
				src: '/svg/chapeau.svg'	,
			alt: 'security',
            href:'#securite'
		}
];

   /*----Section Statistiques------*/ 

let imagesTabAccordion  = [
	
    '/appStats1.png',
    '/ventesHorraires.png',
    '/appStats3.png',
    '/statsVendeursPaysage.png',
    '/appStats5.png'
];

let sectionsTabAccordion = [
    {
        title: 'Statistiques générales',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
    },
    {
        title: 'Moyenne de vente horaire',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
    },
    {
        title: 'Statistiques journalières',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
    },
    {
        title: 'Statistiques Vendeurs ',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
    },
    {
        title: 'Statistiques Produits',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...'
    }
];



/*----Section Management------*/

let titleManagement = "Management d'equipes"

let headerVendeurs = {
		title: 'Stats Vendeurs',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.',
        src: '/appstatpart2.png',
        alt: 'Statistique 1',
        srcTwo : '/appstatpart2-1.png',
        altTwo : 'Statistique 2'
};

let communication = {
		title: 'Communiquez avec vos equipes !',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.',
		src: '/message.jpg',
		alt: 'comunicate',
		buttonHref: '#',
		buttonText: 'Get Started Today'
};


/*----Section Produits----*/

let titleProduct = "Gestion de produits"

let borderImage = 'rounded-lg'

let ficheProduit = {
        title: 'Fiche Produit',
        content: "Toute la chaîne de vie d'un produit au sein de l'entreprise est gérée par l'application, de son arrivée au dépôt à sa remise au client lors de la finalisation de la vente.Grâce à un algorithme de prévision des besoins basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. De fait, tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures dans le même temps ! ",
        src: '/ficheProduit.png',
        alt: 'fiche Produit',
		
};

let btnFicheProduit = {     
    href: '/',
    text: "Commencez aujourd'hui"
};

/*----Section Client----*/ 

let titleClient = "Gestion de clients"

let ficheClient = {
        title: 'Fiche Client',
        content: "Toute la chaîne de vie d'un produit au sein de l'entreprise est gérée par l'application, de son arrivée au dépôt à sa remise au client lors de la finalisation de la vente.Grâce à un algorithme de prévision des besoins basé sur les statistiques de ventes des semaines précédentes, les commandes sont optimisées au plus juste pour les semaines à venir. De fait, tandis que la tendance est au surstock, ou à la rupture momentanée dans certaines enseignes, vous pourrez vous targuer d'avoir à disposition l'outil calculant vos besoins au plus juste, comprenant un léger stock tampon en prévision de hausses de ventes inattendues ou de difficultés d'approvisionnement. Ainsi, vous éviterez facilement les immobilisations financières inutiles et les ruptures dans le même temps ! ",
        src: '/ficheClient.png',
        alt: 'fiche Client',
};

/*----Section Sécurité----*/ 

let titleParameters = "Secutrité et paramètres"
let header3icons = {
		title: 'SilverStock ce veut d\'être une application sécurisée',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.'
};
	
let tabIcons = [
		{
			title: 'Droits d\'accès personnalisés',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.',
			src: '/svg/droits.svg',
			alt: 'Droits',
			width : 'w-14 h-14',
		},
		{
			title: 'Controle IP',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.',
			src: '/svg/web.svg',
			alt: 'Controle IP',
			width : 'w-14 h-14'
		},
		{
			title: 'Systeme d\'authentification sécurisé',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.',
			src: '/svg/lock.svg',
			alt: 'Authentification',
			width : 'w-14 h-14'
		}
];

</script>


<main class="dark:bg-gray-900 dark:text-white text-black">

    <!-- HomeBanner -->

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
    
    <!-- Summary -->

    <SixBoxes {boxesContent} />

    <!-- Section Stats -->

    <Accordion {imagesTabAccordion} {sectionsTabAccordion} />
	
    <!-- Section Stocks -->
        
	<HeadingAccordion />

    <!-- Section management -->
        
    <section class="flex justify-center  mt-20">
        <div class="lg:w-8/12">
            <HeadingTitle title={titleManagement} />
            <HeadingParagraph />
        </div>
    </section>
    
    <DeuxImages twoImgContent = {headerVendeurs} />
    
    <ArticleTwo obj = {communication} /> 
	
    <!-- Section Produits -->

    <section class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleProduct} />
            <HeadingParagraph />
        </div>
    </section>
	
    <ArticleCarrousel />

    <Cta layout="xl:flex-row-reverse" {borderImage} tabCTA = {ficheProduit}   buttonAttributs ={btnFicheProduit}/>
   
    <!-- Section Clients -->

    <section class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleClient} />
            <HeadingParagraph />
        </div>
    </section>

    <Cta {borderImage} tabCTA = {ficheClient}   buttonAttributs ={btnFicheProduit}/>

    <!-- Section Sécurité -->

    <section id="securite" class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleParameters} />
            <HeadingParagraph />
        </div>
    </section>

    <ThreeIcons header={header3icons} iconsTab={tabIcons}  />
    
</main>

<style>
    .bg-image {
        background-image: url('/ordiApp.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        }
</style>