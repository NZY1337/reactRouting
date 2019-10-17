import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import {Autocomplete} from 'react-materialize';

class Contact extends React.Component {
    state = {
        name: null,
        age: null,
        belt: null
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
        this.props.addPeople(this.state)
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
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
                       <form onSubmit={this.onSubmit}>
                            <div className="input-field">
                                <input type="text" id="name" className="autocomplete" onChange={this.onChange} />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="input-field">
                                <input type="number" id="age" className="autocomplete" onChange={this.onChange} />
                                <label htmlFor="age">Age</label>
                            </div>

                            <div className="input-field">
                                <input type="text" id="belt" className="autocomplete" onChange={this.onChange}/>
                                <label htmlFor="belt">Belt</label>
                            </div>

                            <button className='waves-effect waves-light btn'>Submit</button>

                        </form>
                       </div>
                    </div>
            </div>
        )
    }
}

export default Contact;