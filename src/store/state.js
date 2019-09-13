export const host = "http://localhost:8000";
// export const host = "http://18.207.222.218:89";

export const token = {
    "token_type": "Bearer",
    "expires_in": null,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc3ZjM2MWQ1MWM2ZDg5YmNiZjIwOWUwYTc4YzRmMTY3MjIzYzVkYjYyYmMyZjUwY2UzMjE1ZGJmZGU5MzMyZTY5NjAwMWVmY2FhYWMxNmQzIn0.eyJhdWQiOiIyIiwianRpIjoiNzdmMzYxZDUxYzZkODliY2JmMjA5ZTBhNzhjNGYxNjcyMjNjNWRiNjJiYzJmNTBjZTMyMTVkYmZkZTkzMzJlNjk2MDAxZWZjYWFhYzE2ZDMiLCJpYXQiOjE1NjU3Njc2NDIsIm5iZiI6MTU2NTc2NzY0MiwiZXhwIjoxNTk3MzkwMDQyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.bfn7lMLiCSkbUWpQsxFhvgEqrHKHuHk5ZjbrRZ1s_sMgfcmq1tlPKNIsr6dQkLQDozBq_liDXnXGNG_ab1SMBeN9kQEYo1snVXGZQhOA5xwJSnJ1xIseFh9z9lme3sfEC2MK_MamAfetdzT0MdKjNxrzGeVCFiUZ6WmO5-QtmWik1HkXo2wS-EOjUHPip1pXjkRcRVuyb791Kz4UuPg6nNZ38hAJrfnsPyvphCmsfzAadVi40b8lvzs2NGvVXVSAoBgtGjrAC0bkGp-LsgaJMmCIq8clyYNZv-3yy6z_EuPTXURB7OxEfo8T7nVw3GmDIonDzE4qodMdHcsKgIFJZGDdIXKVxH3IcURMgWDERR2Mwm2MOZa5oWGlU9q3VKXyAqO4CT-oCD_KJ0wwqagVqZLprH1AZbjGiCXRLUYtA_9nrD8pA5NuOsS10xMEotlySHt44TG3KBiy5AgbMTTHP8orgqVjUc4wAjekcoLmitPNryP_u9yqJ_eHA7nEF4-_Eu0_u5Bn8ENB2PHng1VUACYj3RNdWEACTJqd5KiqsLTeYmEgY4ZC-T8rZfWN42r3yGzBKiGUHfCy0VqHj3aXtfyd_azze6_sfpDorCszRgFUY1p2xSDX9LWp-SbsOoI0BkW0tmNj-In6C6FapCEeFmIsUA63UG01bPPZX8oPgg8",
    "refresh_token": null
};

export let responseData = {
    success: null,
    message: null,
    data: {},
    errors: [],
    hint: null
};

export let httpSettings = {
    async: true,
    // crossDomain: true,
    // crossOrigin: true,
    // timeout: 10000,      
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: `${token.token_type} ${token.access_token}`
    },
    url: '',
    method: '',
    data: {}
};

// export let selected = {
//     university: 0,
//     faculty: 0,
//     deparment: 0,
//     section: 0,
//     term: 0,
//     gender: 0,
//     arabic_name: "",
//     card_id: ""
// };

// export let materials = [];