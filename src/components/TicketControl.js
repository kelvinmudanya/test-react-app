import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import TicketList from "./TicketList";

class TicketControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             formVisibleOnPage : false,  //this is the default of the ticketcontrol
             mainTicketList: [],
             selectedTicket: null
        };
    }
  handleAddingNewTicketToList = (newTicket) =>{
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList : newMainTicketList,
    formVisibleOnPage:false})
  }
    //calling the handle so that the form can be visible onClick
    // handleClick = ()=>
    // {
    //     this.setState({formVisibleOnPage: true});
    // }

    //toggling a bollean to return to the previous state
    handleClick = () =>
    {
        if(this.state.selectedTicket != null){
            this.setState({
                formVisibleOnPage: false,
                selectedTicket: null
            });
        }
        else{
            this.setState(prevState =>(
            {
                formVisibleOnPage : !prevState.formVisibleOnPage

            }
        
        ));
            
    }
}

    handleChangingSelectedTicket = (id)=>{
        const selectedTicket = this.state.mainTicketList.filter(ticket=> ticket.Id===id)[0];
        this.setState({selectedTicket:selectedTicket})
    

    }

    handleDeletingTicket = (id)=>{
        const newMainTicketList = this.state.mainTicketList.filter(ticket=>ticket.Id!==id);
        this.setState({
            mainTicketList:newMainTicketList,
            selectedTicket: null
        });
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;

        if(this.state.selectedTicket != null){
            currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete={this.handleDeletingTicket}/>
            buttonText= "Return to ticket list"
        }
        else if(this.state.formVisibleOnPage)
        {
            currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
            buttonText= "Return to ticket list"
        }
        else
        {
            currentlyVisibleState = <TicketList ticketList = {this.state.mainTicketList} onTicketSelection = {this.handleChangingSelectedTicket}/>
            buttonText = "Add ticket"

        }
    
        return(
            <React.Fragment>
               {currentlyVisibleState}
             <button onClick = {this.handleClick}>{buttonText}</button>

            </React.Fragment>
        );
    }

}

export default TicketControl;