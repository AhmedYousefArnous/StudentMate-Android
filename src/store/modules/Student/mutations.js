
export const setStudent = (state, payload) => {
    Object.assign(state, payload);
};

export const updateStudentInfoOptionsMutation = (state, payload) => {
    let keys = Object.keys(state.options);
    state.options[keys[payload]] = !state.options[keys[payload]];
};

