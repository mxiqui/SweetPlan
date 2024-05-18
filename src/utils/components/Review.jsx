import React from 'react'
import '../../assets/styles/Review.css'
import imgPrueba from '../../images/bali/bali1.jpg'
import imgStars from '../../images/icon/estrella.png'

const imgDefault = 'https://graph.facebook.com/v2.9/1654478883/picture?type=square&height=64&width=64';

function Review({ review }) {

    const elementos = Array.from({ length: review.average_score });
    const authorAvatar = review.author && review.author.avatar ? review.author.avatar : imgDefault;
    const authorName = review.author && review.author.name ? review.author.name : 'Anonymous';
    const location = review.location ? review.location : 'Unknown location';
    const pros = review.pros ? review.pros : 'No positive feedback provided';

    return (
        <div className='containerReview'>
            <div className='containerReviewTop'>
                <img className='imagenReview' src={authorAvatar} alt={authorName} />
                <div className='containerReviewNameAndPlace'>
                    <p className='nameReview'>{authorName}</p>
                    <p className='localizacionReview'>{location}</p>
                </div>
            </div>
            <div className="containerReviewCenter">
                <div>
                    {elementos.map((_, index) => (
                        <img key={index} className='iconoEstrella' src={imgStars} alt="star" />
                    ))}
                </div>
                <p className='fechaReview'>{review.date}</p>
            </div>
            <div className="containerReviewBottom">
                <p className='descripcionReview'>{pros}</p>
            </div>
        </div>
    )
}

export default Review;
