import React, { Component } from 'react';
import '../../App.css';
import {Button, Modal, Icon, Carousel} from 'react-materialize';
import 'materialize-css/dist/js/materialize.min.js';
import ParentToChildWithClass from '../PassingPropsFromParentToChildWIthClass/ParentToChildWithClass';
import PassingPropsFromParentToChildWIthoutClass from '../PassingPropsFromParentToChildWIthoutClass/ParentToChildWithoutClass';

// this is like our homepage
class Homepage extends Component {
    state = {
        people: [
            {name: 'Andrew', age: 24, belt: 'orange', id: 1},
            {name: 'Bogdan', age: 32, belt: 'blue', id: 2},
            {name: 'Gimmiy', age: 30, belt: 'brown', id: 3}
        ],
    }
    
    render() {
        
        return (
            <div className="container" id="cont">
                <Carousel options={{fullWidth: true,indicators: true, numVisible:true}}
                    images={[
                    'https://images.pexels.com/photos/2818756/pexels-photo-2818756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    'https://images.pexels.com/photos/2805384/pexels-photo-2805384.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    'https://images.pexels.com/photos/2825033/pexels-photo-2825033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                ]} />

                <div >
                    <h3>Contact</h3>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Exercitationem commodi omnis perspiciatis minus adipisci earum tempora vero aut repellendus totam! Omnis repellat non nesciunt et, facilis aliquam quos ipsum nihil.</p>
                    <Modal header="Modal Header" topSheet trigger={<Button>Open<Icon right>send</Icon></Button>}>
                        <ParentToChildWithClass people={this.state.people} />
                    </Modal>
                </div>

                <PassingPropsFromParentToChildWIthoutClass people={this.state.people} />
              
            </div>
        );
    }
}

export default Homepage;
