import * as types from './types';
import { /* IState, IGetters,*/ Actions/*, IActions, IMutations,*/ } from '@/store/types'

const actions: Actions<
types.IState,
types.IActions,
types.IGetters,
types.IMutations /*& IMutations,
IState,
IGetters,
IActions*/
> = {
 async commitMouseOrveredItemName ({ commit }, payload){
    try {
            commit('setMouseOrveredItemName', payload);
        } catch(e){
            // handleError(commit, e);
            console.log(e);
        }
    },

};

export default actions;
