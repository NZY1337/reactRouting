import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import {Autocomplete} from 'react-materialize';

class Contact extends React.Component {
    onSubmit = () => {
        this.props.history.push('/');
        
    }

    render() {
        return (
            <div className="container">
                    <h3>Contact</h3>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Exercitationem commodi omnis perspiciatis minus adipisci earum tempora vero aut repellendus totam! Omnis repellat non nesciunt et, facilis aliquam quos ipsum nihil.</p>

                    <div className="row">
                       <div className="col s5">
                       <form>
                            <div class="input-field">
                                <input type="text" id="autocomplete-input" class="autocomplete" />
                                <label for="autocomplete-input">Name</label>
                            </div>

                            <div class="input-field">
                                <input type="email" id="autocomplete-input" class="autocomplete" />
                                <label for="autocomplete-input">Email</label>
                            </div>

                            <button className='waves-effect waves-light btn' onClick={this.onSubmit}>Submit</button>

                        </form>
                       </div>
                    </div>
            </div>
        )
    }
}

export default Contact;