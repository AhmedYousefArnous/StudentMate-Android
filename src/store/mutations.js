export const setToken = ( state, payload )  => {
    state.token.access_token = payload.access_token;
    state.token.refresh_token = payload.refresh_token;
    state.token.expires_in = payload.expires_in;
};

export const setHttpSettingsToken = ( state )  => {
    state.httpSettings.headers.Authorization 
                      = `${state.token.token_type} ${state.token.access_token}`;

};



export const setLoginDataError = (state, payload) => {
    state.responseData.success = false;
    state.responseData.data = null;
    state.responseData.hint = payload.responseJSON.message;
    state.responseData.message = payload.responseJSON.hint;
    state.responseData.errors.push(payload.responseJSON.error);
};

export const setResponseData = (state, payload) => {
    state.responseData.success = payload.success;
    state.responseData.data = payload.data;
    state.responseData.message = payload.message;
    state.responseData.errors = payload.errors;
};

export let setSelected = (state, payload) => {
    state.selected.university = payload.university;
};


export const changeMaterials = (state, payload) => {
    Object.assign(state.materials, payload);
};
