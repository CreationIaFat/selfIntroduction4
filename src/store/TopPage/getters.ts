import { Getters, /*IState*/ } from '@/store/types';
import * as types from '@/store/TopPage/types'

const getters: Getters<types.IState, types.IGetters/*, IState*/ > = {
    getTopPageModel: (state, /*rootState*/) => {
            return state.MouseOrveredItemName;
        },
};

export default getters;
