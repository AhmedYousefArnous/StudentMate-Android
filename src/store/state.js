export const host = "http://localhost:8000";
// export const host = "http://104.41.151.31";

export const token = {
    "token_type": "Bearer",
    "expires_in": null,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhmYTFjOTU5MzY2Y2FiZTA5N2EwYmVmMWI3NzAwNjkyZmFkMTcyMTk3MjkyYTFiMTY5ODg0YzZmNDJlYjc3ZjFhZjljMDBjNTAzOWM0YjA3In0.eyJhdWQiOiIyIiwianRpIjoiOGZhMWM5NTkzNjZjYWJlMDk3YTBiZWYxYjc3MDA2OTJmYWQxNzIxOTcyOTJhMWIxNjk4ODRjNmY0MmViNzdmMWFmOWMwMGM1MDM5YzRiMDciLCJpYXQiOjE1Njg5NDQyNDYsIm5iZiI6MTU2ODk0NDI0NiwiZXhwIjoxNjAwNTY2NjQ1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AXJ9cR_CsK5YmQSdyrsPFOUAZ3OmnI6HaxWQO8ziW_wAMWaugNdA-MjP61Uw13lmi0WP2xw4mNZrQziGiNpv6Xx8XjZE55O1sE5_AI6nNK930aVf9aPtuiKB2Z1l-kL5pztiyeHubYfcdloSYLPJPGji5NczOmWEn8o61MkbfqzjA-EOyBMDQ2DnISpowIQg6be0CD3ts8fsmFJK9VW2vlMzZKTbFN8PQZmRaQ05VHbf536i73Zb02XQ2NApx3svR4YqFuRPmcjV2XOkr5mtUuVmEF-svkY1TmT8ULTTcBTmHL-1BwaNLlAKx4ETF07gQs7s0av0gymOJM_GQy5f93wNQE06Aydg6b0aC7og88EshzzEivqMWxq0JbkOuoThePJfTysXtIKu-4naLzJxqvOjK269dYuNab_fLWShDNV-tUN1erh5ihaLtNBDTFVEuqF2v9IIQfqYA3EyGIN9kzPd-LM1vLMbUDGu0qM-wzDQ8JaT-42kffaiz93EZrkpiOSMQ5ccTMqb2PsG9hYMwsZ3rgMTdZ-oO6vNIxOoRq48orN0-2qYAJicqSE8M41TGLVhm7ZbCcqVlaBYXnlrE4hmDg9bddH1cq_2h7RictBrsTQOFJ3RW3E9daYfZHrIlB5x1EHXbhgIDe0xuge2j9VVA08Dh9x4WgLMDADN79E",
    // "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk0N2Y0M2JlODBjODE5NjgxMDgzMDJkNWZmMDkxMzFiMjk0YWY4M2VmNTIxZTU5NjFjZWI4NjM1OGRiMGRkZWVlMWZiMjNmNGVjMDdiZjBlIn0.eyJhdWQiOiIyIiwianRpIjoiOTQ3ZjQzYmU4MGM4MTk2ODEwODMwMmQ1ZmYwOTEzMWIyOTRhZjgzZWY1MjFlNTk2MWNlYjg2MzU4ZGIwZGRlZWUxZmIyM2Y0ZWMwN2JmMGUiLCJpYXQiOjE1Njg1MzE1ODMsIm5iZiI6MTU2ODUzMTU4MywiZXhwIjoxNjAwMTUzOTgzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.jCJXBrBgfm4Htx2YkzaByFQTxR_5lbWoImn41h9VrA1OoLhpOFWjEBTHoPv88OTht7Zr3hSXa-FdI25LwWtkr3v1oeRv8HWlK4Lbx9anv78E42VMvKvb9rVNNHd33hlxUgSyaAv1dQ_u8busATYtVzYLiqnfKrYq56cS8BsDijCJkd3UcXwCru4QhcoTbrj0qp6kq5p05CDXFcb2EXV_PSb41lKuGXeZMqlrh3RweSGa-bWonroGgDakVaOIdrB_TdXSTJPrewymF9Lj5JBy0-mXcZVPLkEpvvcG1qDOMsAjwVTYILJWemqUsYSe2z0JmuAYh-fLiGkyKw0g9nFzLfqcC3tEbXw1jqKlNCDTBsY4zX0O1g7X1MtZxKfdL47d1u1zzVUNVlFs1iTOnphfkq2wn7KNwxHnC2DmaHCYP0kbbHKapt-QUpf-7aGLfhTaLQ0O_uVrHI9JJlt9oZkf9RySIkdBfAB-Rg5EiQO5ioc7xyhggRYrNBalMeEIDefA3JOyaJxs9mKMg6EFpLFrxOgTbf_30yObEMZqCKTN5m3SsNq5pntQnhmyQo8eCX56vBmrQHLW_0GDpTpm6YkAp__EUUvW-FX5j7qtfXXyhg4TUnOw4W2iT5FxG4iBA6Y2H0ax7C2peB2-3I8uwUK0gIlcv4FDm7bps9r-MrG3_jo",
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
    // "Access-Control-Request-Origin": "*",
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