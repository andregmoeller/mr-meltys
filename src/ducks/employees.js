import axios from 'axios';

export const types = {
    FETCH_EMPLOYEES_REQUEST: 'FETCH_EMPLOYEES_REQUEST',
    FETCH_EMPLOYEES_SUCCESS: 'FETCH_EMPLOYEES_SUCCESS',
    FETCH_EMPLOYEES_FAILURE: 'FETCH_EMPLOYEES_FAILURE',
};

const DEFAULT_STATE = {

};

export const reducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const actions = {
    fetchEmployees() {
        return (dispatch, getState) => {
            dispatch({
                type: types.FETCH_EMPLOYEES_REQUEST,
            });

            return axios.get('/employees.json')
                .then(response => {
                    dispatch({
                        type: types.FETCH_EMPLOYEES_SUCCESS,
                        payload: response.data,
                    });
                })
                .catch(err => {
                    dispatch({
                        type: types.FETCH_EMPLOYEES_FAILURE,
                        payload: err.message,
                    });
                });
        };
    },
};
