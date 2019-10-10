import *  as globalState from '../../state'
import { eventBus } from '../eventBus';
import { mainVue } from '../../../main';

export const login = ({commit} , payload) => {
    globalState.httpSettings.url = `${globalState.host}/oauth/token`;
    globalState.httpSettings.method = 'POST';
    globalState.httpSettings.data = {
      "grant_type": "password",
      "client_id": "2",
      "client_secret": "InyRQkEdYmXHksyDUwrYT5XrHIxFORMvzXGOs90b",
      "username": `${payload.username}`,
      "password": `${payload.password}`
    };
  
    $.ajax(globalState.httpSettings)
      .done(function (response) {
        commit('setToken', response);
        commit('setHttpSettingsToken');
        if(!payload.register) {
          eventBus.navigate('/main');
        } else {
          eventBus.navigate('/profile/edit/first');
        }
      }).
      catch(
        function (response) {
          console.log(response);
          commit('setLoginDataError', response);
        }
      );
}


export const register = ({commit} , payload) => {
  globalState.httpSettings.url = `${globalState.host}/api/student/register`;
  globalState.httpSettings.method = 'POST';
  globalState.httpSettings.data = {
    "username":   `${payload.username}`,
    "email":      `${payload.email}`,
    "password":   `${payload.password}`,
    "c_password":   `${payload.c_password}`
  };
        
    $.ajax(globalState.httpSettings)
      .done(function (response) {
        mainVue.$store.dispatch('login', {
          username: payload.email,
          password: payload.password,
          register: true
        });
      }).
      catch(
        function (response) {
          commit('setResponseData', response);
        }
      );
}

// export const updateFirstTimeContent = ({commit}) => {
//   globalState.httpSettings.url = `${globalState.host}/api/first/content`;
//   globalState.httpSettings.method = 'GET';
  
    
//   $.ajax(globalState.httpSettings)
//     .done(function (response) {
//       commit('setResponseData', response);
//     }).
//     catch(
//       function (response) {
//         commit('setResponseData', response);
//       }
//     );
// }

export let getStudentInfo = ({commit}) => {
      globalState.httpSettings.url = `${globalState.host}/api/student`;
      globalState.httpSettings.method = 'GET';

      $.ajax(globalState.httpSettings)
      .done(function (response) {
          commit('setStudent', response);
      }).
      catch(
          function (response) {
            console.log(response);            
            commit('setLoginDataError', response);
          }
      );
};

export let updateStudentInfoOptions = ({commit}, payload) => {
   commit('updateStudentInfoOptionsMutation', payload);
  // Adding the http logic
  
  // globalState.httpSettings.url = `${globalState.host}/api/student/options`;
  // globalState.httpSettings.method = 'POST';

  // $.ajax(globalState.httpSettings)
  // .done(function (response) {
  //     commit('setStudent', response);
  // }).
  // catch(
  //     function (response) {
  //     commit('setLoginDataError', response);
  //     }
  // );
};



export let getVisitedStudentInfo = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    globalState.httpSettings.url = `${globalState.host}/api/student/${payload}`;
    globalState.httpSettings.method = 'GET';

    $.ajax(globalState.httpSettings)
    .done(function (response) {
        commit('setVisitedStudent', response);
    }).
    catch(
        function (response) {
          commit('setLoginDataError', response);
        }
    );
    resolve();
  });
};
