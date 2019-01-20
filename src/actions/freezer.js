import { UPDATE_TEMPERATURE } from '../constants/freezer';

export const updateTemperature = (temperature) => ({
    type: UPDATE_TEMPERATURE,
    payload: temperature,
});
