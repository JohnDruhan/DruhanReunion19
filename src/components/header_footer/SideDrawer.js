import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TimeIcon from '@material-ui/icons/AccessTime';
import InfoIcon from '@material-ui/icons/Info';
import HighlightIcon from '@material-ui/icons/Highlight';
import PricingIcon from '@material-ui/icons/LocalActivity';
import LocationIcon from '@material-ui/icons/LocationOn';



const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}

        >
            <List component="nav">
                <ListItem button onClick={() => scrollToElement('featured')}>
                    <ListItemIcon>
                        <TimeIcon style={{color:'#ff4800'}} />
                    </ListItemIcon>
                    <ListItemText primary="Events Starts In" />
                </ListItem>
                <ListItem button onClick={() => scrollToElement('venueNfo')}>
                    <ListItemIcon>
                        <InfoIcon style={{color:'#ff4800'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Venue NFO" />
                </ListItem>
                <ListItem button onClick={() => scrollToElement('highlights')}>
                    <ListItemIcon>
                        <HighlightIcon style={{color:'#ff4800'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Highlights   " />
                </ListItem>
                <ListItem button onClick={() => scrollToElement('pricing')}>
                    <ListItemIcon>
                        <PricingIcon style={{color:'#ff4800'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Pricing" />
                </ListItem>
                <ListItem button onClick={() => scrollToElement('location')}>
                    <ListItemIcon>
                        <LocationIcon style={{color:'#ff4800'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Location" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;