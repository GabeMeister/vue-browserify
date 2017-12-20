// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import LandingPage from './components/LandingPage.vue';
import Hello from './components/Hello.vue';
import Goodbye from './components/Goodbye.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'LandingPage',
			component: LandingPage
		},
		{
			path: '/hello',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/goodbye',
			name: 'Goodbye',
			component: Goodbye
		}
	]
});

new Vue({ // eslint-disable-line no-new
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
