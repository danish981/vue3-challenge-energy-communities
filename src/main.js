import '../src/styles/style.css';


import {createVuetify} from 'vuetify';
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css'
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import router from './router';
import App from './App.vue';


const app = createApp(App);
app.use(createPinia());
const vuetify = createVuetify({
    defaults: {
        VBtn: {
            color: 'primary',
            variant: 'flat',
            rounded: false,
            size: 'large',
        },
    },

    display: {},
});
app.use(vuetify);
app.use(router);

app.mount('#app');
