import { reducer, actions } from '../../freezer';
import * as FLAVORS from '../../../constants/flavors';

describe('Freezer reducer', () => {
    it('should store the temperature in the state', () => {
        const newState = reducer(undefined, actions.updateTemperature(-5));
        expect(newState.temperature).toEqual(-5);
    });

    it('should store the product in the state', () => {
        const newState = reducer(undefined, actions.addProductToFreezer(FLAVORS.VANILLA, 5));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(5);
    });

    it('should add the scoops to a flavor if it already exists', () => {
        const oldState = {
            flavors: {
                [FLAVORS.VANILLA]: 7,
            },
        };
        const newState = reducer(oldState, actions.addProductToFreezer(FLAVORS.VANILLA, 5));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(12);
    });

    it('should make sure not to overflow the freezer', () => {
        const oldState = {
            flavors: {
                [FLAVORS.VANILLA]: 58,
            },
        };
        const newState = reducer(oldState, actions.addProductToFreezer(FLAVORS.VANILLA, 5));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(60);
    });

    it('should remove scoops from the freezer', () => {
        const oldState = {
            flavors: {
                [FLAVORS.VANILLA]: 58,
            },
        };
        const newState = reducer(oldState, actions.removeScoop(FLAVORS.VANILLA));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(57);
    });

    it('should not remove scoops and go below zero', () => {
        const oldState = {
            flavors: {
                [FLAVORS.VANILLA]: 0,
            },
        };
        const newState = reducer(oldState, actions.removeScoop(FLAVORS.VANILLA));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(0);
    });
});
