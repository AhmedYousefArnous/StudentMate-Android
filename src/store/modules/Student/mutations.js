import *  as globalState from '../../state'

export const setStudent = (state, payload) => {
    // state = payload;
    state = Object.assign(state, payload);
};

export const updateStudentInfoOptionsMutation = (state, payload) => {
    let keys = Object.keys(state.options);
    state.options[keys[payload]] = !state.options[keys[payload]];
};


export const setVisitedStudent = (state, payload) => {
    Object.assign(globalState.responseData.data, payload);
};