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
        if(!payload.register) {
          eventBus.navigate('/main');
        } else {
          eventBus.navigate('/profile/edit/first');
        }
      }).
      catch(
        function (response) {
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

export const updateFirstTimeContent = ({commit}) => {
  globalState.httpSettings.url = `${globalState.host}/api/first/content`;
  globalState.httpSettings.method = 'GET';
  
    
  $.ajax(globalState.httpSettings)
    .done(function (response) {
      commit('setResponseData', response);
    }).
    catch(
      function (response) {
        commit('setResponseData', response);
      }
    );
}