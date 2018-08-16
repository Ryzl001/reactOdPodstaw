import React, { Component } from 'react';


class HobbyList extends Component {
  render() {
    const liStyle = {fontSize: '1.5em'};  // camelCase przy nazwie stylu a wartość w cudzysłowie zawsze jako String, musi być zachowany standard JS obiektu
    const hobbies = ['Sleeping', 'Eating', 'Cuddling'];
    return (
      <ul>
        {hobbies.map((h, i) => { // każdy element powinien mieć unikalny key (np. id elementu z bazy danych), w tym przypadku używamy numer indeksu danego elementu w tablicy,     nie jest to dobre rowziązanie bo w przypadku zmiany kolejności lub ilości elementów w tablicy indeks może ulec zmianie
          return <li key={i} style={liStyle}>{h}</li>
        })}
      </ul>
    )
  }
}

export default HobbyList;