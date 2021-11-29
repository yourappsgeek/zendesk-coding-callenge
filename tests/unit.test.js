const {fetchTickets, fetchSingleTicket, fetchAllTickets} = require("../utils/utils")

const expectedResponse = require("./responses/requestResponse.json")
const page = 1

afterAll(done => {
    done()
})

test('Fetch requests test', () => {

    fetchSingleTicket(1).then((response)=>{
        expect(response.data.request).toEqual(expectedResponse)
    }).catch((error)=>{
        console.error(error)
    })

});

test('Fetch all tickets', () => {

    fetchAllTickets().then((response)=>{
        expect(response.data.count).toEqual(100)
    }).catch((error)=>{
        console.error(error)
    })

});
