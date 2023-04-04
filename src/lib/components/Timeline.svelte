<section class="flex justify-center py-5 h-screen items-center">
	<div class="container">
		<div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
			<!-- left -->
			<div class="flex flex-row-reverse md:contents">
				<div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
					<h3 class="font-semibold text-lg mb-1">Arrivage</h3>
					<p class="leading-tight text-justify">
						A réception d'un arrivage, les produits sont saisis sur l'application, ainsi que leur
						prix d'achat. Après contrôle et validation de l'arrivage, les produits sont donc en
						stock dépôt et les tarifs d'achat sont mis à jour en direct, permettant ensuite le
						calcul de la marge ou le choix judicieux du fournisseur.
					</p>
				</div>
				<div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
					<div class="h-full w-6 flex items-center justify-center">
						<div class="h-full w-1 bg-blue-800 pointer-events-none" />
					</div>
					<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
				</div>
			</div>
			<!-- right --> 
			<div class="flex md:contents">
				<div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
					<div class="h-full w-6 flex items-center justify-center">
						<div class="h-full w-1 bg-blue-800 pointer-events-none" />
					</div>
					<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
				</div>
				<div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
					<h3 class="font-semibold text-lg mb-1">Transferts</h3>
					<p class="leading-tight text-justify">
						Toutes les semaines, les boutiques sont réachalandées. Pour chaque boutique,
						l'algorithme calcule les besoins en fonction des ventes réalisées. D'autres types de
						transferts peuvent se faire, tels que des commandes passées par les clients. Le
						processus est le même.
					</p>
				</div>
			</div>
			<!-- left -->
			<div class="flex flex-row-reverse md:contents">
				<div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
					<h3 class="font-semibold text-lg mb-1">Contrôles</h3>
					<p class="leading-tight text-justify">
						A leur arrivée en boutique, les réassorts, commandes clients, commandes exceptionnelles
						sont contrôlées. Si une erreur est présente, un inventaire est demandé sur ce produit en
						boutique, et au dépôt.
					</p>
				</div>
				<div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
					<div class="h-full w-6 flex items-center justify-center">
						<div class="h-full w-1 bg-blue-800 pointer-events-none" />
					</div>
					<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
				</div>
			</div>
			<!-- right -->
			<div class="flex md:contents">
				<div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
					<div class="h-full w-6 flex items-center justify-center">
						<div class="h-full w-1 bg-blue-800 pointer-events-none" />
					</div>
					<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
				</div>
				<div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
					<h3 class="font-semibold text-lg mb-1">Stock Boutique</h3>
					<p class="leading-tight text-justify">
						A intervalle régulier, si un produit n'a pas été contrôlé depuis longtemps, un
						inventaire sera demandé afin de s'assurer que le stock est juste.
					</p>
				</div>
			</div>
            <!-- left -->
            <div class="flex flex-row-reverse md:contents">
                <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 class="font-semibold text-lg mb-1">Sortie stock/vente</h3>
                    <p class="leading-tight text-justify">
                        Lors la vente, le produit est retiré des stocks. Si une erreur est présente (stock
                        théorique à 0 mais produit existant) il est possible de I'ajouter à la vente mais un
                        inventaire automatique sera demandé.
                    </p>
                </div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-blue-800 pointer-events-none" />
                    </div>
                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow" />
                </div>
            </div>
		</div>
	</div>
</section>
