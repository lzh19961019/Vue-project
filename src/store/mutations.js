import getters from './getters.js';

const state = {
    isShow:true,
    isNavShow:true
}

const mutations = {
    showLoading: (state) => {
        state.isShow = true
    },
    hideLoading: (state) => {
        state.isShow = false
    },
    showNav: (state) => {
        state.isNavShow = true
    },
    hideNav: (state) => {
        state.isNavShow = false;
        // localStorage.setItem('hideNav', false);
        // sessionStorage.getItem('state');
        // state.isNavShow = type;

        // sessionStorage.setItem('state','false');
        //  sessionStorage.getItem('state');
        //   console.log(sessionStorage.getItem('state'));
    },
    setUserInfo: (state, userInfo) => {
        state.userInfo = userInfo;
    }
}

export default {
    getters,
    state,
    mutations
}