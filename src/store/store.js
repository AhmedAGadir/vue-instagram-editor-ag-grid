import Vue from 'vue';
import Vuex from 'vuex';
import { GHOST_ID_ROW, ID_SEQUENCE } from '../rowData.js';

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
        addGhostUser(state, user) {
            state.rowData.unshift(user);
        },
        commitGhostUser(state, user) {
            let ind = state.rowData.findIndex(row => row.id === GHOST_ID_ROW);
            state.rowData[ind].id = Math.floor(Math.random() * 99999) + 100;
            console.log('commited id for state.rowData[ind]', state.rowData[ind].id)
        },
        deleteUser(state, { user, force = false }) {
            let confirm = true;
            if (!force) {
                confirm = window.confirm(`Are you sure you would like to remove ${user.accountDetails.username}?`)
            }
            if (confirm) {
                let updatedRowData = this.state.rowData.filter(row => row.id !== user.id);
                state.rowData = updatedRowData;
            }
        }
    },
})