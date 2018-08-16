import React, { Component } from 'react';
import './Pet.css' // jeśli rozszerzenie jest inne niż .js to musimy je napisać
import HobbyList from './HobbyList';


class Moxie extends Component {
  render() {
    return (
      <div className="card" >
        <h1 className="name" >Moxie Drink</h1>
        <img   src='https://img.buzzfeed.com/buzzfeed-static/static/2015-10/15/9/campaign_images/webdr14/12-reasons-moxie-is-the-best-soda-on-earth-2-25642-1444917578-0_dblbig.jpg' alt='Moxie Drink'
        />
        <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
        <HobbyList />
      </div>
    );
  }
}

export default Moxie;
