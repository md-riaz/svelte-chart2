<script>
	import Loader from '$lib/components/loader.svelte';

	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import '../app.css';
	
	

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();


</script>


<Loader />

<ToastProvider placement="top-end">
	{#if children}
		{@render children()}
	{/if}
</ToastProvider>
