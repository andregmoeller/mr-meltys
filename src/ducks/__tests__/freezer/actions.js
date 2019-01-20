import { actions, types } from '../../freezer';

describe('udpateTemperature', () => {
    it('should contain the right action type', () => {
        const action = actions.updateTemperature();
        expect(action.type).toEqual(types.UPDATE_TEMPERATURE);
    });

    it('should contain the remperature in the payload', () => {
        const action = actions.updateTemperature(-5);
        expect(action.payload).toEqual(-5);
    });
});

describe('addProductToFreezer', () => {
    it('should contain the right action type', () => {
        const action = actions.addProductToFreezer();
        expect(action.type).toEqual(types.ADD_PRODUCT_TO_FREEZER);
    });

    it('should have the name in the action payload', () => {
        const action = actions.addProductToFreezer('foo');
        expect(action.payload.name).toEqual('foo');
    });

    it('should have the amount in the action payload', () => {
        const action = actions.addProductToFreezer('foo', 5);
        expect(action.payload.amount).toEqual(5);
    });

    it('should have the default amount in the action payload', () => {
        const action = actions.addProductToFreezer('foo');
        expect(action.payload.amount).toEqual(20);
    });
});
