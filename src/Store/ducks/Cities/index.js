import CitiesTypes from './types';
import produce from 'immer';

const INITIAL_STATE = {
    data: [],
    error: false,
    loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CitiesTypes.LOAD_REQUEST:
            return produce(state, (draft) => {
                draft.loading = true;
                draft.error = false;
            });

        case CitiesTypes.LOAD_SUCCESS:
            return produce(state, (draft) => {
                const { payload } = action;   

                draft.data = payload;
                draft.loading = false;
                draft.error = false;
            });

        case CitiesTypes.LOAD_FAILURE:
            return produce(state, (draft) => {     
                draft.loading = false;
                draft.error = true;
            });

        case CitiesTypes.LOAD_DEFAULT:
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