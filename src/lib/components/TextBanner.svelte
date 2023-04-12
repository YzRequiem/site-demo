<script>
	import SvGdivider from "./SVGdivider.svelte";
	import SvGdividerBottom from "./SVGdividerBottom.svelte";
   
    let color = "shapedividers_com-1602" ;
    export let header = {
        title: 'Une application ergonomique et sécurisée',
        content: "Lorsque nous avons créé notre application, l'ergonomie et la sécurité ont été nos priorités absolues. Nous savons que nos utilisateurs attendent une expérience fluide et intuitive, mais ils doivent également se sentir en sécurité lorsqu'ils l'utilisent. Nous avons conçu une interface utilisateur simple et intuitive qui permet à chacun de naviguer dans l'application sans effort. ",
    };
</script>

<section class="py-28">

    <SvGdividerBottom {color}  />
    <article class="bg-black text-gray-100 flex items-center justify-center flex-col md:flex-row">
        <div class="w-2/6 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-32 h-32">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    </div>
    
    <div class="flex flex-col justify-evenly py-5 lg:px-24 w-4/6">
        <div>
            <h2 class="text-3xl p-8 font-bold">
                {header.title}
            </h2>
        </div>
        <div>
            <p class="text-xl p-8 dark:text-gray-300">
                {header.content}
            </p>
        </div>
        
    </div>
</article>
<SvGdivider/>
</section>