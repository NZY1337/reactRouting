import React from 'react';
import {Button, Modal, Icon, Carousel} from 'react-materialize';
import 'materialize-css/dist/js/materialize.min.js';

class Contact extends React.Component {
    render() {
        return (
            <div>
                  <Carousel options={{fullWidth: true,indicators: true, numVisible:true}}
                 images={[
                    'https://images.pexels.com/photos/2965505/pexels-photo-2965505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
           
        )
    }
}

export default Contact;