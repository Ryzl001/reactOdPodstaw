import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

export class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }

  render() {
    const { title, img, instructions } = this.props;  // używamy destructora (shorthand od const title = this.props.title)
    const ingredients = this.props.ingredients.map((ing, index) => (<li key={index}>{ing}</li>))  // jeśli jest tylko jedna linia callbacku to możemy bez słowa return umieścić wszystko w nawiasach okrągłych zamiast klamrowych
    return (
      <div className='recipe-card'>
        <div className='recipe-card-image'>
          <img src={img} alt={title}/>
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-title'>{title}</h3>
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
