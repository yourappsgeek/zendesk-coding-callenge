require("dotenv").config()

module.exports = {
    singleTicketUrl: () => {
        return process.env.SINGLE_TICKET_URL
    },
    allTicketsUrl: () => {
        return process.env.ALL_TICKETS_URL
    },
    username: () => {
        return process.env.API_USERNAME
    },
    password: () => {
        return process.env.API_PASSWORD
    }
}
