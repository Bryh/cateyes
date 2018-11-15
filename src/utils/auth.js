

const authLogin = () => {

    let userinfo = JSON.parse(localStorage.getItem("userinfo") || "{}" )

    return userinfo
}

export default {authLogin}