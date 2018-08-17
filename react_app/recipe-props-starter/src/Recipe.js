import React, { Component } from 'react';
import './Recipe.css';

export class Recipe extends Component {
  render() {
    const { title, img, instructions } = this.props;  // używamy destructora (shorthand od const title = this.props.title)
    const ingredients = this.props.ingredients.map((ing, index) => (<li key={index}>{ing}</li>))  // jeśli jest tylko jedna linia callbacku to możemy bez słowa return umieścić wszystko w nawiasach okrągłych zamiast klamrowych
    return (
      <div className='recipe-card'>
        <div className='recipe-card-image'>
          <img src={img} alt={title}/>
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-title'>Recipe {title}</h3>
          <h4>ingredients:</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>

    )
  }
}

export default Recipe;
