import '../src/styles/style.css';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createVuetify } from 'vuetify';

// todo : vuetify css classes are not autocompleting in components, not anywhere
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';

const options = {
    position: "top-right",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true
};

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
app.use(Toast, options);

app.mount('#app');
