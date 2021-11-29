require("./utils/env-util")
const readline = require("readline")

const nodeCli = require("node-cli")
const {fetchAllTickets, fetchSingleTicket} = require("./utils/utils")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please select operation. \n\n 1 :Fetch all tickets. \n\n 2: Fetch single ticket. \n\n Type 'quit' to quit.\n\n", async (operation) => {
    switch (operation) {
        case "1":
            await printAllTickets()
            rl.close()
            break;
        case "2":
            rl.question("\n\nPlease enter ticket id.\n\n", async (ticketId) => {
                await printSingleTicket(ticketId)
                rl.close()
            });
            break;
        case "quit":
            rl.close()
            break;
    }
});


const printAllTickets = async () => {
    console.log("\nPlease wait, fetching all tickets....")

    try {
        let {data} = await fetchAllTickets()
        console.log("\n\nHere's your ticket....")
        console.log("\n\n", data.requests)
        return Promise.resolve()
    } catch (error) {
        console.error(error.message)
        return Promise.resolve()
    }
}


const printSingleTicket = async (ticketId) => {
    console.log("\n\nPlease wait, fetching ticket....")

    try {
        let {data} = await fetchSingleTicket(ticketId)
        console.log("\n\nHere's your ticket....")
        console.log("\n\n", data.request)
        return Promise.resolve()
    } catch (error) {
        console.error(error.message)
        return Promise.resolve()
    }
}



