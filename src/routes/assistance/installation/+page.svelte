<script>
    import ThreeIcons from '$lib/components/ThreeIcons.svelte';
    
    let header3icons = {
            title: 'Besoin d\'aide ?',
            content:
                " lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
    };
        
    let tabIcons = [
            {
                title: 'Windows',
                href : '/assistance/installation/windows',
            },
            {
                title: 'MacOS',
                href : '/assistance/installation/macos',
            },
    ];
    
    </script>
    
    <main class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
    
        <ThreeIcons header={header3icons} iconsTab={tabIcons}  />
    
    </main>