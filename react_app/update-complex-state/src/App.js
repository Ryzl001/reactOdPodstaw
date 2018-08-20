import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        },
        {
          name: 'Matt',
          hobbies: ['math', 'd3']
        },
        {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        },
        {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    }
    setTimeout(() => { // dzięki temu, że jest funkcja strzałkowa to słowo this odnosi się do App
      //find random instructor
      const randInst = Math.floor(Math.random() * this.state.instructors.length);
      const hobbyIndex = Math.floor(Math.random() * this.state.instructors[randInst].hobbies.length);


      // *******************************
      // const instructors = this.state.instructors.slice();
      // instructors[randInst] = Object.assign({}, instructors[randInst]);
      // instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
      // instructors[randInst].hobbies.splice(hobbyIndex, 1);
      // this.setState({instructors});
      // *******************************

      // lepsza metoda - skrócona ale trudniejsza
      // const instructors = this.state.instructors.map((inst, i) =>( // map zwraca nową tablicę, nie modyfikuje oryginalnej tablicy
      //   i === randInst ? { // jesli i równa się randInst to chcemy coś zmienić
      //     ...inst, // chcemy zachować wszystkie keys w tym obiekcie ( w tym są tylko dwa )
      //     hobbies: [...inst.hobbies.slice(0, hobbyIndex).concat(inst.hobbies.slice(hobbyIndex+1, inst.hobbies.length))]
      //   } : inst // w pozostałych nic nie zmieniamy i zwracamy oryginalny stan
      // )); // jeśli wstawiamy nawiasy okrągle zamiast klamrowych to pomijamy słowo return

      // lepsza - dłuższa
      const instructors = this.state.instructors.map((inst, i) => {
        if(i === randInst) {
          const hobbies = [inst.hobbies]; // to samo co inst.hobbies.slice();
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst,
            hobbies
          }
        }

        return inst;
      })
      this.setState({instructors});

    }, 1000);
  }



  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: { instructor.hobbies.join(', ') }</h4>
      </li>
    ))
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
