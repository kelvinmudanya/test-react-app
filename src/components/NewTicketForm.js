import { Fragment } from "react";
import PropTypes from "prop-types";
import {v4} from 'uuid';

function NewTicketForm(props)
{
   
    function handleNewTicketFormSubmission(event) {
        event.preventDefault();//onNewTicketCreation is the callback
        props.onNewTicketFormCreation({
            names : event.target.names.value,
            location : event.target.location.value,
            issue : event.target.issue.value,
            id: v4()
        })
    }






    return(
        <Fragment>
            
            <form onSubmit={handleNewTicketFormSubmission}>

                <input
                type = 'text'
                name = 'name'
                placeholder = 'Pair names'
                />
                
                < input
                type = 'text'
                name = 'location'
                placeholder= 'Location'
                />
                <input
                type = 'text'
                name = 'issue'
                placeholder='Describe your issue'
                />
                <button type ='submit'>Help!</button>
                
            </form>
        </Fragment>
    );

}
NewTicketForm.propTypes={
    onNewTicketFormCreation: PropTypes.func
};
export default NewTicketForm;