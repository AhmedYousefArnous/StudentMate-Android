import *  as globalState from '../../state'


export let getConversationInfo = ({commit}, payload) => {
    return new Promise((resolve, reject) => {
        globalState.httpSettings.url = `${globalState.host}/api/conversations/${payload}`;
        globalState.httpSettings.method = 'GET';

        $.ajax(globalState.httpSettings)
        .done(function (response) {
            commit('setConversation', response);
        }).
        catch(
            function (response) {
            console.log(response);            
            commit('setLoginDataError', response);
            }
        );
        resolve();
    });
};

export let deleteConversation = ({commit}, payload) => {
    return new Promise((resolve, reject) => {
        globalState.httpSettings.url = `${globalState.host}/api/conversations/${payload}`;
        globalState.httpSettings.method = 'DELETE';

        $.ajax(globalState.httpSettings)
        .catch(
            function (response) {
                console.log(response);            
                commit('setLoginDataError', response);
            }
        );
        resolve();
    });
};

