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
    import { IconBoxSeam, IconUsers, IconShoppingCart, IconChartPie, IconLock, IconBuildingStore } from '@tabler/icons-svelte';

    /*----Section summary----*/
let boxesContent = [
		{
			title: 'Statistiques',
			content:
				'Obtenez des statistiques détaillées sur vos ventes et vos performances pour mieux comprendre votre activité.',
            href:'#statistiques',
            component: IconChartPie
		},
		{
			title: 'Gestion des stocks',
			content:
				"Suivez et gérez votre inventaire de manière efficace pour éviter les ruptures de stock.",
            href:'#stocks',
            component: IconBoxSeam
		},
		{
			title: "Management d'équipes",
			content:
				'Gérez facilement les tâches et les responsabilités de votre équipe pour améliorer l\'efficacité et la communication.',

            href:'#management',
            component: IconBuildingStore
		},
		{
			title: 'Gestion de produits',
			content:
				'Ajoutez, modifiez et supprimez facilement vos produits pour maintenir une base de données à jour.',
            href:'#produits',
            component: IconShoppingCart
		},
		{
			title: 'Gestion de clients',
			content:
				"Suivez les informations clés sur vos clients pour mieux comprendre leurs besoins et fidéliser la clientèle.",
            href:'#clients',
            component: IconUsers
		},
		{
			title: "Sécutrité et paramètres",
			content:
				"Personnalisez votre application en fonction de vos besoins et assurez la sécurité de vos données grâce à des mesures de sécurité avancées.",
            href:'#securite',
            component: IconLock
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
            'Consultez vos statistiques générales en temps réel avec une multitude de filtres vous permetant d\'affiner vos analyses.'
    },
    {
        title: 'Moyenne de vente horaire',
        content:
            "Optimisez la gestion de votre personnel en suivant la vente moyenne horaire de votre magasin, pour ajuster les horaires en fonction de l'affluence  et améliorez votre stratégie de vente en conséquence."
    },
    {
        title: 'Statistiques journalières',
        content:
            "Consultez en détail vos statistiques journalières en temps réel et suivez vos performances en les comparant aux statistiques de l'année précédente et managez vos équipes en conséquence. "
    },
    {
        title: 'Statistiques Vendeurs ',
        content:
            'Retrouvez les statistiques mensuelles de vos vendeurs, leurs performances du chiffre d\'affaire, panier moyen au taux de rebond. '
    },
    {
        title: 'Statistiques Produits',
        content:
            'Identifiez les produits les plus populaires auprès de vos clients en analysant les statistiques produits, et adaptez votre offre en conséquence.'
    }
];

/*----Section Management------*/

let titleManagement = "Management d'equipes"

let buttonVente = {
     href: '/contact',
      text: "Commencez aujourd'hui",
      };

let headerVendeurs = {
		title: 'Stats Vendeurs',
		content:
			"La possibilité de mise en place de challenges de vente est mise en exergue ici, les vendeurs voient en temps réel où ils en sont sur leurs objectifs. Un outil simple pour booster les équipes de vente !",
        src: '/appstatpart2.png',
        alt: 'Statistique 1',
        srcTwo : '/appstatpart2-1.png',
        altTwo : 'Statistique 2'
};

let communication = {
		title: 'Communiquez avec vos equipes !',
		content:
			"La messagerie interne de l'application vous permet de communiquer avec vos équipes en temps réel. Vous pouvez envoyer des messages à vos vendeurs, managers, administrateurs et bien plus encore.",
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
        //content: "La fiche produit de notre application vous permet de suivre et de gérer toutes les informations importantes de vos produits en un seul endroit. Vous pouvez facilement visualiser le prix d'achat et de vente de chaque produit, ainsi que la marge bénéficiaire générée. La section de gestion des stocks vous permet de surveiller les niveaux de stock en temps réel et de mettre à jour les quantités en fonction des ventes ou des réapprovisionnements. Vous pouvez également accéder aux codes-barres de chaque produit pour faciliter la gestion des transactions en magasin. Les raccourcis pour modifier les produits permettent une mise à jour rapide des informations. La visualisation graphique des données de vente vous permet de suivre les tendances de vos produits au fil du temps. De plus, la fonctionnalité de produits associés permet de recommander facilement des produits complémentaires à vos clients, augmentant ainsi les ventes. Enfin, les commentaires sur le produit faits par les vendeurs permettent une collaboration en interne pour améliorer la qualité des produits et la satisfaction de vos clients. ",
        src: '/ficheProduit.png',
        alt: 'fiche Produit',
		
};

let tabList = [
	{
        content: 'Visualiser facilement les prix d\'achat et de vente de chaque produit, ainsi que la marge bénéficiaire générée.',
    },
    {
        content: 'Accéder aux codes-barres de chaque produit pour faciliter la gestion des transactions en magasin.',
    },
    {
        content: 'Modifier rapidement les informations sur les produits grâce à des raccourcis pratiques.',
    },
    {
        content: 'Suivre les tendances de vente de vos produits grâce à une visualisation graphique des données.',
    },
    {
        content: 'Recommander facilement des produits complémentaires à vos clients pour augmenter les ventes.',
    },
    {
        content: 'Collaborer en interne pour améliorer la qualité des produits et la satisfaction des clients grâce aux commentaires sur les produits faits par les vendeurs.',
    }

];

let btnFicheProduit = {     
    href: '/contact',
    text: "Contactez-nous",
};

/*----Section Client----*/ 

let titleClient = "Gestion de clients"
let clientIntro = "L'un des objectifs de cette application est aussi de permettre une relation client personnalisée, et de pouvoir mettre en place un suivi de la clientèle. Grâce à des fiches clients complètes, nous pouvons voir au moment de la vente quels sont les produits achetés auparavant par le consommateur, et ainsi lui proposer ces derniers produits, ou des produits en relation susceptibles de lui plaire."


let ficheClient = {
        title: 'Fiche Client',
        content: "Grâce à une fiche client optimisée au maximum, cela vous permettra d'accéder instantanément aux informations concernant chaque client, ce qui vous fait gagner un temps précieux. En analysant votre fichier client, vous pouvez anticiper les besoins de vos clients et leur apporter des solutions adaptées à leurs besoins. Pour améliorer la satisfaction de vos clients, il est important de trier l'information afin de ne retenir que les données vraiment utiles à vos relations commerciales. ",
        src: '/ficheClient.png',
        alt: 'fiche Client',
};

/*----Section Sécurité----*/ 

let titleParameters = "Sécutrité et paramètres"
let header3icons = {
		title: 'SilverStock ce veut d\'être une application sécurisée',
		content:
			"En termes de sécurité, nous avons mis en place plusieurs mesures pour protéger les données de nos utilisateurs. Nous utilisons des protocoles de sécurité avancés pour garantir que toutes les données soient protégées pendant la transmission. Nous avons également mis en place des contrôles d'accès stricts pour nous assurer que seules les personnes autorisées ont accès aux informations sensibles."
};
	
let tabIcons = [
		{
			title: 'Droits d\'accès personnalisés',
            content: "Gérez les droits d'accès aux différentes données et fonctionnalités de l'application en fonction des rôles de vos utilisateurs.",
			src: '/svg/droits.svg',
			alt: 'Droits',
			width : 'w-14 h-14',
		},
		{
			title: 'Controle IP',
            content: 'Limitez l\'accès à l\'application à partir d\'un réseau IP spécifique pour éviter toute connexion en dehors du cadre du travail.',
			src: '/svg/web.svg',
			alt: 'Controle IP',
			width : 'w-14 h-14'
		},
		{
			title: 'Systeme d\'authentification sécurisé',
            content: 'Connectez vous en toute sécurité à l\'application grâce à un système d\'authentification sécurisé.',
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
        
    <section id="management" class="flex justify-center  mt-20">
        <div class="lg:w-8/12">
            <HeadingTitle title={titleManagement} />
            <HeadingParagraph />
        </div>
    </section>
    
    <DeuxImages buttonAttributs= {buttonVente} twoImgContent = {headerVendeurs} />
    
    <ArticleTwo obj = {communication} /> 
	
    <!-- Section Produits -->

    <section id="produits" class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleProduct} />
            <HeadingParagraph />
        </div>
    </section>
	
    <ArticleCarrousel />

    <Cta layout="xl:flex-row-reverse" {tabList} {borderImage} tabCTA = {ficheProduit}   buttonAttributs ={btnFicheProduit}/>
   
    <!-- Section Clients -->

    <section id="clients" class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleClient} />
            <HeadingParagraph content={clientIntro} />
        </div>
    </section>

    <Cta {borderImage} tabCTA = {ficheClient}   buttonAttributs ={btnFicheProduit}/>

    <!-- Section Sécurité -->

    <section id="securite" class="flex justify-center  mt-20">
        <div class="lg:w-8/12 ">
            <HeadingTitle title={titleParameters} />
        </div>
    </section>

    <ThreeIcons header={header3icons} iconsTab={tabIcons}  />

    
</main>

<style>
    .bg-image {
        background-image: url('/ordiApp.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        }
</style>