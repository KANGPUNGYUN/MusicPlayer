import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'pung'
	}
});

export default app;