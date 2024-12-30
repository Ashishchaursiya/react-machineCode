import  { useState } from 'react';

const StarRating = ({ totalStars=5 }) => {
    const [selectedStar,setSelectedStar] = useState(0)
    const [hoverStar,setHoverStar] = useState(0)
   

    return (
        <div className="star-rating">
            <h1>star rating</h1>
            {
                 [...Array(totalStars)].map((item, idx) => (
                    <span key={idx} 
                    onMouseEnter={() => setHoverStar(idx+1)}
                    onMouseLeave={() => setHoverStar(0)}
                    className={ hoverStar>idx ||(hoverStar==0 && selectedStar>idx) ? 'gold':''}
                     onClick={ () => setSelectedStar(idx+1) }>&#9733;</span>
                ))
            }
        </div>
    );
};

export default StarRating;