import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        rowData: null
    },
    getters: {
        rowData: state => {
            return state.rowData;
        }
    },
    mutations: {
        setRowData(state, payload) {
            state.rowData = payload;
        },
        deleteUser(state, user) {
            let confirm = window.confirm(`Are you sure you would like to remove ${user.accountDetails.userName}?`)
            if (confirm) {
                let updatedRowData = this.state.rowData.filter(data => data.id !== user.id);
                state.rowData = updatedRowData;
            }
        }
    },
})