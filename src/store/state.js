export const host = "http://localhost:8000";

export const token = {
    "token_type": "Bearer",
    "expires_in": null,
    "access_token": null,
    "refresh_token": null
};

export const responseData = {
    "success": null,
    "message": null,
    "data": {},
    "errors": [],
    "hint": null
}

export let httpSettings = {
    async: true,
    crossDomain: true,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json",
    //   authorization: `Bearer ${token}`
    },
    url: '',
    method: '',
    data: {}
}


