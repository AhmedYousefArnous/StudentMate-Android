import *  as globalState from './state'


export let changeSelected = ({commit}, payload) => {
    // globalState.selected = payload;
    commit('setSelected', payload);    
};



export let getMaterials = ({commit}) => {
    // return new Promise((resolve, reject) => {        
        globalState.httpSettings.url = `${globalState.host}/api/series`;
        globalState.httpSettings.method = 'GET';
    
        $.ajax(globalState.httpSettings)
        .done(function (response) {
            commit('changeMaterials', response);
        }).
        catch(
            function (response) {
            commit('setLoginDataError', response);
            }
        );

        // resolve();
    // });  
};