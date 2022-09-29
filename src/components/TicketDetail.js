import React, { Fragment } from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
    const { ticket } = props;
    return(
        <React.Fragment>
            <h1>Ticket details</h1>
            <h3>
                {ticket.location} - {ticket.names}
            </h3>
            <p><em>ticket.issue</em></p>
            <hr/>
            <button onClick ={()=> onClickingDelete(ticket.Id)}>Close ticket</button>
        </React.Fragment>
    );
}
TicketDetail.propTypes = {
    ticket: PropTypes.object,
    onClickingDelete: PropTypes.func
};
export default TicketDetail;