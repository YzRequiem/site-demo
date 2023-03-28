<script>
	import ArticleOne from '$lib/components/ArticleOne.svelte';
	import ArticleTwo from '$lib/components/ArticleTwo.svelte';
	import HomeBanners from '$lib/components/HomeBanners.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import ArticleDeuxImg from '../lib/components/ArticleDeuxImg.svelte';
	import HeadingAccordion from '../lib/components/HeadingAccordion.svelte';
	
</script>
<div class="dark:text-white dark:bg-slate-900">

	<HomeBanners />
	
	<Accordion />

	<ArticleDeuxImg />
	
	<HeadingAccordion />
	
	<ArticleTwo />
	
	<ArticleOne />

	
	
</div>