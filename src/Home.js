import React, { Component } from 'react';
import './App.css';
import {Button, Modal, Icon, Carousel} from 'react-materialize';
import 'materialize-css/dist/js/materialize.min.js';

// this is like our homepage
class Homepage extends Component {
  render() {
    return (
        <div>
            <Carousel options={{fullWidth: true,indicators: true, numVisible:true}}
                images={[
                'https://images.pexels.com/photos/2818756/pexels-photo-2818756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/2805384/pexels-photo-2805384.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                'https://images.pexels.com/photos/2825033/pexels-photo-2825033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ]} />

            <div className="container">
                <h3>Contact</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Exercitationem commodi omnis perspiciatis minus adipisci earum tempora vero aut repellendus totam! Omnis repellat non nesciunt et, facilis aliquam quos ipsum nihil.</p>
                <Modal header="Modal Header" topSheet trigger={<Button>Open<Icon right>send</Icon></Button>}>
                    asd
                </Modal>
            </div>
        </div>
    );
  }
}

export default Homepage;
