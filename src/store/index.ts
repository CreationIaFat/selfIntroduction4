import Vue from 'vue';
import Vuex from 'vuex';
// import { IState } from '@/store/types';
// import getters from './getters';
// import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

// const state: IState = {

// }

export default new Vuex.Store({
//   state: state as any, // Todo: module化のため、一時的にanyとする。要修正
//   getters,
//   actions,
  mutations,
  modules: {

  },
});
