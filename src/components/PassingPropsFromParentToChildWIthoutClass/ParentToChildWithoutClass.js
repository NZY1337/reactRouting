import React, {Component} from 'react';

const DisplayPeople = ({people, deletePerson}) => {
    // or
    // const people = props;

    const displayMen = people.map(man => {
        return (
            <div className="withoutClass" id={man.id} key={man.id}>
                <p>Name: {man.name}</p>
                <p>Age: {man.age}</p>
                <p>Belt: {man.belt}</p>
                <button onClick={() => {deletePerson(man.id)} } className="btn">Delete Person</button>
            </div>
        )
    })
    
     /*
    const displayIfMan = people.map(man => {
        {
            if (man.age > 24) {
                return (
                    <div className="withoutClass" key={man.id}>
                        <p>Name: {man.name}</p>
                        <p>Age: {man.age}</p>
                        <p>Belt: {man.belt}</p>
                    </div>
                )
            }
        }
    })
    */

    /*
    const displayTernaryMan = people.map(man => {
        return (  
              man.age > 24 ?  (
                  <div className="withoutClass" key={man.id}>
                      <p>Name : {man.name}</p>
                      <p>Age: {man.age}</p>
                      <p>Belt: {man.belt}</p>
                  </div>
              ) : null
          )
      })
    */

    return (
        <div>
            <h4>Normal Output:</h4>
            {displayMen}
        </div>
    )
}

export default DisplayPeople;