import React, { useState } from 'react';
import "./rating.css";
import { FaStar } from "react-icons/fa";
const Rating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div className='rating'>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label>
                        <input type="radio" name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className='star'
                            size={20}
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <p>{rating}</p>
            <span>(974)</span>
        </div>
    )
}

export default Rating
