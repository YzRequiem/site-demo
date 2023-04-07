<script>
	import SvGdivider from "./SVGdivider.svelte";
	import SvGdividerBottom from "./SVGdividerBottom.svelte";
   
    let color = "shapedividers_com-1602" ;
    export let header = {
        title: 'Une application ergonoque et sécurisée',
        content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    };
</script>

<SvGdividerBottom {color}  />
<section class="bg-black text-gray-100  ">
    <div class="flex flex-col justify-evenly py-5 px-48">
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
</section>
<SvGdivider/>