import React from 'react';

class Users extends React.Component {
    render() {
        console.log(this.props.match.id);
        return (
            <div className="container">
                <h3>Users</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Exercitationem commodi omnis perspiciatis minus adipisci earum tempora vero aut repellendus totam! Omnis repellat non nesciunt et, facilis aliquam quos ipsum nihil.</p>
            </div>
        )
    }
}

export default Users;