const axios = require("axios")
const env = require("./env-util")
const prepareAuth = () => {
    return {
        username: env.username(),
        password: env.password()
    }
}

const fetchAllTickets = () => {
    return axios.get(env.allTicketsUrl(), {
        auth: prepareAuth(),
    })
}

const fetchSingleTicket = (page) => {
    return axios.get(`${env.singleTicketUrl() + page}.json`, {
        auth: prepareAuth(),
    })
}

module.exports = {
    fetchAllTickets,
    fetchSingleTicket
}
