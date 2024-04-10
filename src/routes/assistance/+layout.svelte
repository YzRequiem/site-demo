<script>
	import { page } from '$app/stores';

    let urlSegments;
    let myBreadcrumbs;

    $: {
        urlSegments = $page.url.pathname.split('/').filter((segment) => segment !== '');
        myBreadcrumbs = urlSegments.map((segment, index, array) => {
            return {
                label: segment.charAt(0).toUpperCase() + segment.slice(1),
                link: '/' + array.slice(0, index + 1).join('/')
            };
        });
    }
</script>

<header class="dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-white">
	<div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
		<ol class="breadcrumb flex gap-5">
			{#each myBreadcrumbs as crumb, i}
				<!-- If crumb index is less than the breadcrumb length minus 1 -->
				{#if i < myBreadcrumbs.length - 1}
					<li class="crumb"><a class="anchor" href={crumb.link}>{crumb.label}</a></li>
					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
				{:else}
					<li class="crumb">{crumb.label}</li>
				{/if}
			{/each}
		</ol>
	</div>
</header>

<slot />
