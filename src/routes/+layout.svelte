<script>
	
	import Loader from '$lib/components/loader.svelte';
	import { loading } from '$lib/store/loadingStore';

	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	
	import { navigating, page } from '$app/state';


	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();


</script>


<Loader />

<ToastProvider placement="top-end">
	{#if children}
		{@render children()}
	{/if}
</ToastProvider>
