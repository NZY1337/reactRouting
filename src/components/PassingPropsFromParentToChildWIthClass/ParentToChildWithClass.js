import React, {Component} from 'react';

class ParentToChildWithClass extends Component {
    render() {
        const { people } = this.props;
       
        const showPPl = people.map(ppl =>{ 
            return (
                <div className="ppl" key={ppl.id}>
                    <p>Name: {ppl.name}</p>
                    <p>Age: {ppl.age}</p>
                    <p>Belt: {ppl.belt}</p>
                </div>
            )
        });
        
        return (
            <div>
                {showPPl}
            </div>
        )
    }
}

export default ParentToChildWithClass