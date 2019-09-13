export const host = "http://localhost:8000";
// export const host = "http://18.207.222.218:89";

export const token = {
    "token_type": "Bearer",
    "expires_in": null,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzYzEzNmVkMmZlYmY2Njk5NWJmYTVjNmQ0MjRiMWExMWJmZDljNzg5ZDVmY2E4ZWFkYjllMzU0NmVkZmM1NTM2ZGU3ZjcyYmZmYjQyZTMyIn0.eyJhdWQiOiIyIiwianRpIjoiNDNjMTM2ZWQyZmViZjY2OTk1YmZhNWM2ZDQyNGIxYTExYmZkOWM3ODlkNWZjYThlYWRiOWUzNTQ2ZWRmYzU1MzZkZTdmNzJiZmZiNDJlMzIiLCJpYXQiOjE1NjgzNTY5ODUsIm5iZiI6MTU2ODM1Njk4NSwiZXhwIjoxNTk5OTc5Mzg1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.DecHLgcMpsHSlAS1ORhBznlFA9AeaKnPVbyOp6ghRSVJXPbrA7JXd7dSSps7e7DnNp_OiQ8MbOLyE_HFQt3LRsHiMb1l1ZWNi36Rf0-EAwQ3_zpAwD5v7x4-0Xw4GgN-oDB2uSgL4ULCZiY3wiB1rx7C1g-3dGbLZ8z_8AJT1O1GKGXitpVLUKIAeYP7rQLvkEPFaAfqtBKJFG2PAev0EbdN9czeain_wzMavjUFcOsQfaGONi265mJWFqlch2MaS6RXmsAyZrGnAQKkxKpv_iL5JiGzTMdysX4LFfYXW17-GE6bH9e7z1AfIijiPn2NwTnla8HG5gl3chIG_Vf7GUs0PjJCIeJFZL8-Z6USWIpTSCRfvaHPTJrw8dvHuOnIt_uZiYVKm6F1XRM3CY4pkmP6Zh5oKcII5ZEzB3Mp325ShWFmBc2kDWcM4xcDrbXLA3jhzxiZZZngwiAZAJLc1nmpPejlxHLxrHWA5UOhJ9iZ-9sXoluMN_X7xDuh6gOMntD7KFa-rEo5eDUweT3YJlnSg1xbrS6Ol0AGCpKe20fLfYb7dBZjeDuZDAU-SkdmJwebibUiz5HpW_JR_-lipjcXGWntE8V6rqXzbltEM0I1GkVtpZyt_pUgFVWT1h4FEP-b5OrfMI9M99nyQH_bsciNeeb48Mj4PMAvHb-i8TI",
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