import { actions, types } from '../../orders';
import { VANILLA } from '../../../constants/flavors';

describe('placeOrder()', () => {
    it('should contain the right action type', () => {
        const action = actions.placeOrder({});
        expect(action.type).toEqual(types.PLACE_ORDER);
    });

    it('should contain the customer name in the payload', () => {
        const action = actions.placeOrder({
            customerName: 'Cindy',
        });

        expect(action.payload.customerName).toEqual('Cindy');
    });

    it('should contain the date of creation in the payload', () => {
        const action = actions.placeOrder({
            createdAt: 5,
        });

        expect(action.payload.createdAt).toEqual(5);
    });
    
    it('should contain the current date of creation in the payload if no date is given', () => {
        const action = actions.placeOrder({});
    
        expect(typeof action.payload.createdAt).toEqual('number');
    });
    
    it('should contain the cone/cup option in the payload', () => {
        const action = actions.placeOrder({
          cone: false,
        });
    
        expect(action.payload.cone).toEqual(false);
    });

    it('should default to a cone if no cone option is given', () => {
        const action = actions.placeOrder({});

        expect(action.payload.cone).toEqual(true);
    });

    it('should contain the scoops object in the payload', () => {
        const action = actions.placeOrder({
          scoops: {
            [VANILLA]: 1,
          },
        });
    
        expect(action.payload.scoops).toEqual({
          [VANILLA]: 1,
        });
    });
});
