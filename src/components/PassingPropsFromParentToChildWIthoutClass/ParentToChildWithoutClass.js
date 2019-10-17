import React, {Component} from 'react';

const DisplayPeople = ({people}) => {
    // or
    // const people = props;

    const displayMen = people.map(man => {
        return (
            <div className="withoutClass">
                
                <p>Name: {man.name}</p>
                <p>Age: {man.age}</p>
                <p>Belt: {man.belt}</p>
            </div>
        )
    })

    const displayIfMan = people.map(man => {
        {
            if (man.age > 24) {
                return (
                    <div className="withoutClass">
                        <p>Name: {man.name}</p>
                        <p>Age: {man.name}</p>
                        <p>Belt: {man.name}</p>
                    </div>
                )
            }
        }
    })

    const displayTernaryMan = people.map(man => {
        return (  
              man.age > 24 ?  (
                  <div className="withoutClass">
                      <p>Name : {man.age}</p>
                      <p>Age: {name.age}</p>
                      <p>Belt: {name.belt}</p>
                  </div>
              ) : null
          )
      })

    return (
        <div>
            <h4>Normal Output:</h4>
            {displayMen}
            <h4>If/Else Output:</h4>
            {displayIfMan}
            <h4>Ternary Operator:</h4>
            {displayTernaryMan}
        </div>
    )
}

export default DisplayPeople;