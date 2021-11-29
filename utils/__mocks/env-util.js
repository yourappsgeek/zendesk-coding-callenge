require("dotenv").config()

class EnvUtil {
    get apiUrl() {
        return process.env.API_URL
    }

    get username() {
        return process.env.API_USERNAME
    }

    get password() {
        return process.env.API_PASSWORD
    }
}

global.Env = new EnvUtil()
