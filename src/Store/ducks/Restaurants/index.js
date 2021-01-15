import RestaurantsTypes from './types';
import produce from 'immer';

const INITIAL_STATE = {
    data: [],
    allData:[],
    error: false,
    loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RestaurantsTypes.LOAD_REQUEST:
            return produce(state, (draft) => {
                draft.loading = true;
                draft.error = false;
            });

        case RestaurantsTypes.LOAD_SUCCESS:
            return produce(state, (draft) => {
                const { payload } = action;   
                
                draft.allData = payload.allData;
                draft.data = payload.data;
                draft.loading = false;
                draft.error = false;
            });

        case RestaurantsTypes.LOAD_FAILURE:
            return produce(state, (draft) => {     
                draft.loading = false;
                draft.error = true;
            });

        case RestaurantsTypes.LOAD_DEFAULT:
            return produce(state, (draft) => {     
                draft.loading = false;
                draft.error = true;
                draft.data = [];
            });

        default:
            return state;
    }
};

export default reducer;