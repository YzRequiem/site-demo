<script>
    import ThreeIcons from '$lib/components/ThreeIcons.svelte';

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
    

    <main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
    
        <ThreeIcons header={header3icons} iconsTab={tabIcons}  />
    
    </main>