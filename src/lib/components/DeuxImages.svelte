<script>

	import ButtonOne from "./ButtonOne.svelte";

    export  let buttonAttributs = {
		
	};
    export let twoImgContent = {};
</script>

<section class="flex xl:flex-row flex-col justify-center items-center py-10">
    <article class="lg:py-24 xl:px-48 px-24 w-full lg:w-3/6">
        <h2 class="text-3xl font-bold sm:text-4xl dark:text-slate-100">{twoImgContent.title}</h2>

        <p class="mt-4 text-gray-600 dark:text-gray-400">
            {twoImgContent.content}
        </p>

        <div class="py-8">
            <ButtonOne {buttonAttributs} />
        </div>
    </article>

    <article class="w-full lg:w-2/6 flex ">
        <!-- <div class="bg-red-400 w-96 h-96 absolute z-10"></div>
        <div class="bg-blue-400 w-96 h-96 relative m-20 mx-56 "></div> -->
       
            <div>
                <img src={twoImgContent.src} alt={twoImgContent.alt} class="rounded-xl shadow-2xl shadow-black w-60 sm:w-96  sm:h-96 absolute z-10">
            </div>
            <div>
                <img src={twoImgContent.srcTwo} alt={twoImgContent.altTwo} class="rounded-xl shadow-2xl shadow-black w-60 sm:w-96 sm:h-96 relative m-20 mx-56">  
            </div>
       
    </article>

</section>