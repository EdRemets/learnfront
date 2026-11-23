import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Todo from './pages/Todo.vue';
import Modals from './pages/Modals.vue';
import Buttons from './pages/Buttons.vue';
import Messages from './pages/Messages.vue';
import ChuckNorris from './pages/ChuckNorris.vue';

const routes = [
    { path: '/', component: Todo, name: 'Todo' },
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/buttons', component: Buttons, name: 'Buttons'},
    { path: '/messages', component: Messages, name: 'Messages'},
    { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris'},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');