import { createStore } from "vuex";

export default createStore({
    state: {
        nightMode: false,
    },
    mutations: {
        reverseMode(state){
        state.nightMode = !state.nightMode;
        },
    },
    actions: {},
    modules: {},
});