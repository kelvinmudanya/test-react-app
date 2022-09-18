import React from "react";
import Ticket from "./Ticket";



const mainTicketList  = [
    {
        names : 'Caroline',
        location : 'Kakamega',
        issue : 'The whole code is not working'
    },
    {
        names : 'Carlos',
        location : 'Kakamega',
        issue : 'Trying to identify the problem'
    },
    {
        names : 'Clinton',
        location : 'Kakamega',
        issue : 'I have found the solution, but it is not working'
    },
    {
        names : 'Jaslan',
        location : 'Bungoma',
        issue : 'Just leave it'
    },
];
function TicketList(){
    return(
        <React.Fragment>
            <hr/>
            {mainTicketList.map((ticket, index)=>
            <Ticket names= {ticket.names}
            location = {ticket.location}
            issue = {ticket.issue}
            key={index}/>
            )}

       

        </React.Fragment>

    );
}
export default TicketList;
