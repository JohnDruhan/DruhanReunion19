import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import MyButton from '../utils/MyButton';


class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 25,
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
               discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.percentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Zoom delay={500}>
                        <div className="discount_description">
                            <h3>Book a room before June 13th </h3>
                            <p>The last date to book a Druhan Reunion Discounted Room at the Fairfield in Cumberland is June 13, 2019</p>
                            <MyButton link= 'https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Druhan%20Family%20Reunion%5ECBEFI%60DRUDRUA%7CDRUDRUB%60119.00%60USD%60false%602%607/4/19%607/7/19%6006/13/2019&app=resvlink&stop_mobi=yes' target='_blank' rel='noreferrer noopener' title="Book a Room" border='#ff4800' color="#ff4800"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        );
    }
}


export default Discount;