import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';


class Pricing extends Component {

    state = {
        prices: [119, 125, 250],
        positions: ['Guest room, 2 Queen', 'Guest room, 1 King', 'VIP Package'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                        Ideally located close to I-68 and close to Cumberland Regional Airport, Cumberland Country Club, Downtown Cumberland, Frostburg State University and Maryland Mountains. Free WiFi and Breakfast.
                    </div>
                        <div className="pricing_buttons">
                            <MyButton link='https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Druhan%20Family%20Reunion%5ECBEFI%60DRUDRUA%7CDRUDRUB%60119.00%60USD%60false%602%607/4/19%607/7/19%6006/13/2019&app=resvlink&stop_mobi=yes' target='_blank' title='Book Now' border='#ffa800' color='#fff' />
                    </div>
                </div>
                </div>
            </Zoom>
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;