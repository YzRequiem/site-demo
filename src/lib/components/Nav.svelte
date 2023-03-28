<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
    import { DarkMode } from 'flowbite-svelte';
    // import { page } from '$app/stores';

    const navigation = [
        { href: '/', label: 'Accueil' },
        { href: '/entreprise', label: 'Entreprise' },
        { href: '/offres', label: 'Offres' },
        { href: '/contact', label: 'Contact' }
      
    ];
  </script>
  
  <Navbar let:hidden let:toggle  color="form">
    <NavBrand href="/">
      <img src="/notif-logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SilverStock</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    
    <NavUl {hidden}>
      {#each navigation as navItem}
      <!-- active ={ $page.url.pathname === navItem.href ? 'active' : '' } -->
        <NavLi 
          href={navItem.href}
        >
          {navItem.label}
        </NavLi>
      {/each}
    </NavUl>

    <!-- <NavUl {hidden}>
        <NavLi href="/login" >Login</NavLi>
        
        <NavLi> <form action="/logout" method="POST">
          <button type="submit">logout</button></form> 
        </NavLi>  
      

        
    </NavUl> -->

    <DarkMode />
  </Navbar>