import Vue from "vue";
import App from "./APP.vue";
import router from '../src/router'


new Vue({
    el: "#app",
    router,
    render: h => h(App)
});