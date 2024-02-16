<script>
    import ThreeIcons from '$lib/components/ThreeIcons.svelte';
    import { page } from '$app/stores';
   
    let urlSegments = $page.url.pathname.split('/').filter(segment => segment !== '');

    console.log(urlSegments);
    let header3icons = {
            title: 'Besoin d\'aide ?',
            content:
                " lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
    };
        
    let tabIcons = [
            {
                title: 'Configuration',
                content: "",
                href : '/assistance/configuration',
                src: '/svg/gear.svg',
                alt: 'Configuration',
                width : 'w-16 h-16',
            },
            {
                title: 'Utilisation',
                content: '',
                href : '/assistance/utilisation',
                src: '/svg/user.svg',
                alt: 'Utilisation',
                width : 'w-16 h-16'
            },
    ];
    
    </script>
    
    <header class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <!-- <h1 class="text-3xl font-bold py-5">{pageTitle} - Silver-Stock</h1> -->
        </div>
    </header>
    <main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
    
        <ThreeIcons header={header3icons} iconsTab={tabIcons}  />
    
    </main>