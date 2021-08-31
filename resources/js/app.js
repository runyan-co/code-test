window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';
import RecordTable from './components/RecordTable';
import { BootstrapVue } from 'bootstrap-vue';

Vue.use(BootstrapVue);

window.app = new Vue({
    el: '#app',
    components: { 'record-table': RecordTable }
});
