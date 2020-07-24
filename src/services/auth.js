import Cookies from 'js-cookie'
import axios from 'axios';

const AUTH_API_URL = "https://api.mrucznik-rp.pl/"

class AuthService {
    login(nick, password) {
        return axios
            .post(AUTH_API_URL + "users/login", {
                nick,
                password
            })
            .then(response => {
                if (response.data.token) {
                    Cookies.set("__session", response.data.token, { secure: true })
                }

                return response.data;
            });
    }

    getSession() {
        const jwt = Cookies.get('__session')
        let session;
        try {
            if (jwt) {
                const base64Url = jwt.split('.')[1]
                const base64 = base64Url.replace('-', '+').replace('_', '/')
                // what is window.atob ?
                // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
                session = JSON.parse(window.atob(base64))
            }
        } catch (error) {
            console.log(error)
        }
        return session
    }

    isAuthenticated() {
        return this.getSession() !== undefined
    }

    logout() {
        Cookies.remove('__session')
    }

    authHeader() {
        const token = JSON.parse(Cookies.get('__session'));

        if (token) {
            return {Authorization: 'Bearer ' + token};
        } else {
            return {};
        }
    }
}

export default new AuthService();
