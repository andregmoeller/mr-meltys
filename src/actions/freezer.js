import { UPDATE_TEMPERATURE, ADD_PRODUCT_TO_FREEZER } from '../constants/freezer';

export const updateTemperature = (temperature) => ({
    type: UPDATE_TEMPERATURE,
    payload: temperature,
});

export const addProductToFreezer = (name, amount = 20) => ({
    type: ADD_PRODUCT_TO_FREEZER,
    payload: {
        name,
        amount,
    },
});
