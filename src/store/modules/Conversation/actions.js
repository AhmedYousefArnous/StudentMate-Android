import *  as globalState from '../../state'


export let getConversationInfo = ({commit}, payload) => {
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
};