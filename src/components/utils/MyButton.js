import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '@material-ui/icons/LocalActivity';

const MyButton = (props) => {

   

    return (
        <div>
            <Button href={props.link} variant="outlined" size="medium" style={{ marginTop:'10px',borderRadius:'0px',borderColor:`${props.border}`,color:`${props.color}`}}>
            <TicketIcon style={{marginRight:'10px'}} />
                {props.title}
            </Button>
        </div>
    );
};

export default MyButton;