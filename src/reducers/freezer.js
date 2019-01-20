import { UPDATE_TEMPERATURE, ADD_PRODUCT_TO_FREEZER } from '../constants/freezer';

const DEFAULT_STATE = {
    temperature: null,
    flavors: {},
}

const freezerReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: action.payload,
            };
        case ADD_PRODUCT_TO_FREEZER:
            const amount = (state.flavors[action.payload.name] || 0) + action.payload.amount;
            return {
                ...state,
                flavors: {
                    ...state.flavors,
                    [action.payload.name]: Math.min(amount, 60),
                },
            };
        default:
            return state;
    }
};

export default freezerReducer;
