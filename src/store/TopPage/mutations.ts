import { Mutations } from '@/store/types';
import * as types from './types';

const mutations: Mutations<types.IState, types.IMutations> = {
    setMouseOrveredItemName: (state, payload) => {
        state.MouseOrveredItemName = payload;
    }
};

export default mutations;
