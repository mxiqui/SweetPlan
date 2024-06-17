import React, { useState } from 'react'
import Review from '../../../utils/components/Review'
import ReviewAirbnb from '../../../utils/components/ReviewAirbnb'
import '../../../assets/styles/Reviews.css'
import icono from '../../../images/icon/mostrarMas.png'

function Reviews({ reviews }) {
    const [visibleReviews, setVisibleReviews] = useState(6);
    console.log(reviews.data.data)

    const handleShowMore = () => {
        setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 6);
    }

    return (
        <div className='containerReviews'>
            <h4>Reseñas</h4>
            <div className='containerReviewsInterior'>
                {reviews.company === 'booking' ? (
                    reviews.data.result.slice(0, visibleReviews).map((element, index) => (
                        <Review review={element} key={index} {...element} />
                    ))
                ) : (
                    reviews.data.data.map((element, index) => (
                        <ReviewAirbnb review={element} key={index} {...element} />
                    ))
                )}
            </div>
            {reviews.company === 'booking' && visibleReviews < reviews.data.result.length && (
                <div className='containerMostrarMas' onClick={handleShowMore}>
                    <img src={icono} alt="Mostrar más" />
                    <p>Mostrar más</p>
                </div>
            )}
        </div>
    )
}

export default Reviews
