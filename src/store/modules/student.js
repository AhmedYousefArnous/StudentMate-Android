import *  as globalState from '../state'

const state = {
  token : null    
};

const getters = {

};

const mutations = {
  setToken: ( state, payload )  => {
    state.token = payload;
  }

};


const actions = {
  login: ({commit} , payload) => {
    var settings = {
        "async": true,
        "crossDomain": true,
        "headers": {
          "content-type": "application/x-www-form-urlencoded",
          "accept": "application/json",
        },
        "url": `${globalState.host}/oauth/token`,
        "method": "POST",
        "data": {
          "grant_type": "password",
          "client_id": "2",
          "client_secret": "InyRQkEdYmXHksyDUwrYT5XrHIxFORMvzXGOs90b",
          "username": `${payload.username}`,
          "password": `${payload.password}`
        }
      }
      
      $.ajax(settings)
        .done(function (response) {
          commit('setToken', response);
      });
  },
  // register: ({commit} , payload) => {
  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": `${state.host}/api/student/register`,
  //     "method": "POST",
  //     "headers": {
  //       "accept": "application/json",
  //       "content-type": "application/x-www-form-urlencoded"
  //     },
  //     "data": {
  //       "username": "ahmed12346nbv5",
  //       "email": "dsaahmed123sad@gmail.com",
  //       "password": "123654789",
  //       "c_password": "123654789"
  //     }
  //   }
    
  //   $.ajax(settings).done(function (response) {
  //     console.log(response);
  //   });
  // },
   
};

export default {
    state,
    getters,
    mutations,
    actions
}