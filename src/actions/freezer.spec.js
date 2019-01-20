import { updateTemperature } from './freezer';
import { UPDATE_TEMPERATURE } from '../constants/freezer';

describe('udpateTemperature', () => {
    it('should contain the right action type', () => {
        const action = updateTemperature();
        expect(action.type).toEqual(UPDATE_TEMPERATURE);
    });

    it('should contain the remperature in the payload', () => {
        const action = updateTemperature(-5);
        expect(action.payload).toEqual(-5);
    });
});
