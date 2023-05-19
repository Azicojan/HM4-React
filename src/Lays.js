

import styles from './styles/Lays_styling.module.css'
import { useState } from 'react';

export default function Lays(){
    return(
        <div className={styles.productContainer}>
         <div className={styles.images}>
           <img src={ require('./img/lays_image.png')} alt="Lays chips" className={styles.chipsImage} />
           <img src={ require('./img/Shape (Stroke).png')} alt="if I like it or not" className={styles.like} />

         </div>   
         
         
         <Price />
         <Description />
         <StarRating />
         <CartButton />

        </div>
        
    )
}

function Price(){
    return(
        <h3 className={styles.price}>20,000 Uzs</h3>
    )
}

function Description(){
    return(
        <p className={styles.description}>The description of a product is supposed to be here.</p>
    )
}

const StarRating = () => {
    const [rating, setRating] = useState(0);
  
    const handleStarClick = (selectedRating) => {
      setRating(selectedRating);
    };
  
    return (
      <div className={styles['star-rating']}>
        
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? styles.filled : styles.star}
              onClick={() => handleStarClick(star)}
            >
              &#9734;
            </span>
          ))}
        </div>
      </div>
    );
  };

function CartButton(){
    return(
        <button className={styles['cart-button']}>Add to the shopping cart</button>
    )
}