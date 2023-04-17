<script>
	import Cta from "$lib/components/CTA.svelte";

    let presentation  =	{
		title: "Silver-Stock, qu'est-ce que c'est ?",
		content: "Issue d'un travail mené depuis 2015, l'application Silver-Stock est aujourd'hui à son stade le plus abouti et le plus fonctionnel. Développée par la synergie créée par des brainstorming hebdomadaires entre les différents acteurs de deux entreprises de cigarette électronique (équipes de ventes, préparateurs de commandes, responsables des achats, pôle managérial...) et l'équipe de développement, ce projet s'est inscrit dans la modernisation de nos outils de gestion, jusqu'à en devenir un élément central et essentiel, nous ayant permis de nous démarquer des autres entreprises du secteur.",
		src: '/iconSilverBig.webp',
		alt: 'Vente',
}

</script>

<header class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold py-5">Notre histoire - Silver-Stock</h1>
	</div>
</header>
<main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
    
    <section class="flex justify-center py-20 shadow">
        <article class=" flex w-5/6 items-center justify-evenly flex-wrap ">
            <div class="flex flex-col gap-20 w-3/6">
                <div class="flex flex-col gap-5">
                    <h2 class="text-2xl ">Notre Mission</h2>
                    <h3 class="text-3xl ">Redefinir la façon dont nous travaillons</h3>
                </div>
                <div class=" flex flex-col gap-10">
    
                    <p>
                        Dans un pays qui a vu naître les plus grandes références du luxe, croître les marques les
                        plus raffinées, se développer les enseignes les plus créatives, comment imaginer que nous ne
                        saurions accompagner l’innovation et la compétence au service de nos exigences ?
                    </p>
                    C’est pourquoi j’ai décidé, avec Silver Stock, d’aller au-devant des attentes des fumeurs et des
                    vapoteurs, en étant proactif : en proposant des vrais services, en vous proposant un accompagnement
                    personnalisé dans une relation de confiance sincère.
                    <p>
                        J’ai voulu, à travers notre histoire et nos investissements, à travers notre ancrage bleu
                        blanc rouge, apporter à la cigarette électronique toutes ses lettres de noblesse.
                    </p>
                    <p>
                        Silver-Stock a créé d'infinies possibilités que nous
                        n'avions pas avant.
                </p>
    
            </div>
                <p>Mossadegh AFRIT - Président Directeur Général</p>
            </div>
            <div>
                <img class="max-w-[550px]" src="/pdg.jpg" alt="Mossadegh AFRIT - Président Directeur Général" />
            </div>
        </article>
    </section>
    
    <Cta tabCTA = {presentation} />
    
    <!-- component -->
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
            <hr class="border-gray-200 my-12 dark:border-gray-700">
    
    
            <div class="lg:flex lg:items-center py-10">
                <div class="w-full space-y-12 lg:w-1/2 ">
                    <div>
                        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Une application <br> ERP / CRM </h1>
    
                        <div class="mt-2">
                            <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                            <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                            <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                        </div>
                    </div>
    
                    <div class="md:flex md:items-start md:-mx-4">
                        <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>
    
                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Un outil analytique</h1>
    
                            <p class="mt-3 text-gray-500 dark:text-gray-300">
                                Nous avons mis l'accent lors du développement de Silver-Stock sur
                                multitude d'outils d’analyses statistiques.
                                En temps réel ou sur une période donnée, nous pouvons avoir à disposition visuelle
                                l'ensemble des ventes réalisées au sein de nos boutiques, les volumes de sortie de
                                chacun des produits de notre catalogue, le nombre de nouveaux clients, de ventes
                                réalisées, le bénéfice produit, le chiffre d'affaire global ou par magasin, et bien d'autres
                                indicateurs essentiels à la bonne gestion d'une boutique, ou d'un réseau de magasins !                            </p>
                        </div>
                    </div>
    
                    <div class="md:flex md:items-start md:-mx-4">
                        <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </span>
    
                        <div class="mt-4 md:mx-4 md:mt-0">
                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Un outil de gestion</h1>
    
                            <p class="mt-3 text-gray-500 dark:text-gray-300">
                                Silver-Stock intègre également un module ERP complet pour vous aider à gérer efficacement l'ensemble de vos opérations quotidiennes. Grâce à cet outil, vous pourrez gérer votre comptabilité, vos achats, vos stocks, votre production, vos ressources humaines et bien plus encore.  Vous pourrez ainsi suivre en temps réel vos indicateurs de performance, planifier votre production, gérer vos commandes fournisseurs, suivre l'évolution de vos coûts et optimiser votre rentabilité. Avec Silver-Stock, vous disposerez d'un outil de gestion puissant et flexible pour piloter votre entreprise en toute sérénité.
                            </p>
                        </div>
                    </div>
    
                    
                </div>
    
                <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                    <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="">
                </div>
            </div>
    
            <hr class="border-gray-200 my-12 dark:border-gray-700">
    
    
        </div>
    </section>
   
</main>
