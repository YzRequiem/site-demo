<script>
	import { Button } from 'flowbite-svelte';
	import PricingCards from '../../lib/components/PricingCards.svelte';

    
</script>
<main class="dark:bg-gray-900">
    <section class=" flex flex-col justify-center items-center p-20 gap-8">
        <h2 class="text-2xl font-bold text-gray-900 md:text-5xl dark:text-slate-100" >Boostez vos Equipes</h2>
        <p class="hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block md:text-2xl"> Commencez votre essai gratuit de 14 jours ! </p>
        <Button class="py-5">Commencer</Button>
        <img class="p-5" src="/logoSSrose.webp" alt="logo">

    </section>

    <PricingCards />
</main>