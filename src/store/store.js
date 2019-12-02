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
        setRowData(state, data) {
            state.rowData = data;
        },
        addUser(state, user) {
            state.rowData.unshift(user);
        },
        deleteUser(state, { user, force = false }) {
            let confirm = true;
            if (!force) {
                confirm = window.confirm(`Are you sure you would like to remove ${user.accountDetails.username}?`)
            }
            if (confirm) {
                let updatedRowData = this.state.rowData.filter(data => data.id !== user.id);
                state.rowData = updatedRowData;
            }
        }
    },
})