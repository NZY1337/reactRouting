import React from 'react';
import {Button, Modal, Icon, Breadcrumb} from 'react-materialize';
import 'materialize-css/dist/js/materialize.min.js';

class Contact extends React.Component {
    render() {
        
        return (
            <div className="container">
                <h3>Contact</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Exercitationem commodi omnis perspiciatis minus adipisci earum tempora vero aut repellendus totam! Omnis repellat non nesciunt et, facilis aliquam quos ipsum nihil.</p>
                <Modal header="Modal Header" topSheet trigger={<Button>Open<Icon right>send</Icon></Button>}>
                    asd
                </Modal>
            </div>
        )
    }
}

export default Contact;