export const host = "http://localhost:8000";
// export const host = "http://104.41.151.31";

export const token = {
    "token_type": "Bearer",
    "expires_in": null,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNmQ3ZGM5YzE5ODljZDY1MDlhYWU2MzRlNTMyYzQzZGJlMDg1NTdkNDZkYjMzOWIwMmE2NTZjZjcyNzRlNzJiZmZiYWVhMjAwYmVjZGJiIn0.eyJhdWQiOiIyIiwianRpIjoiNWY2ZDdkYzljMTk4OWNkNjUwOWFhZTYzNGU1MzJjNDNkYmUwODU1N2Q0NmRiMzM5YjAyYTY1NmNmNzI3NGU3MmJmZmJhZWEyMDBiZWNkYmIiLCJpYXQiOjE1NzE5MDQ2NTcsIm5iZiI6MTU3MTkwNDY1NywiZXhwIjoxNjAzNTI3MDU2LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.EAEKxgpxA4VsxMAH0_H-UHWmI_UVYM_sh4J6l_lWP6Zm9-jvMk9nendujD818ry-thb1qLUPy6jLaPNLwRhanLspqNce2V4dF4rnfXBHnu3CQ3mucLpSVqydSRvXStnAP5SAYbXwn3Tt3qKTS0zyI93ZRQpQv7qj0SFC8Fft3XN1y44nPBW7I0tospxxpBg65crjdhJZlKBpssCf7S76lR5KHf6E_KPyoaQgGuWQb4NbGFLbmtIkozIcufI9rjvFiWi4qvkmujjbja963uio-4VKTJpalb1tAMZ8W7lWDHL9CEsf7lGjWFvc8X6u6IbgISy1hCv-k0OJizAvWC2AfAUwWb1cRX9gPA1qhxedCpRp9cRotumKCno5gGb3QGnrmO3b9bKui3hQ-rPAtr2ybXDvd0-LlUDL-BbUkj8HNtxWCe8pgPf1HDMoFtaYEUx2pa_OJ0i2QDiM67_k2Sob8CqpRNsF2GOtoquFUuoWy5vUkthuqB_LElbowbGWmbpkniP4wT6Dn1HN5C1vTX4dDzu0vQqlAQAZJ2qeeQ5qoGRlVsSJFoqpRXrRm8jNK9PKULv8Go6FfGRFuNUKeswMKANfyl8vhzkXMpfPO66rWt1N79KDto1TH0L7cdrpApb_zpngvw9Lmo8iTgmSb32QRtObB-okecaKqWuHqyG6bVQ",
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