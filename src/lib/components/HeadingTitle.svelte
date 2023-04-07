<script>

	import { Heading, Span } from "flowbite-svelte";

    export let title;

</script>


<Heading tag="h1" class="mb-4" customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
		><Span gradient>{title}</Span>
</Heading>