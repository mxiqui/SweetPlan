import React, { useState } from 'react'
import Review from '../../../utils/components/Review'
import '../../../assets/styles/Reviews.css'
import icono from '../../../images/icon/mostrarMas.png'

import { rew } from '../../../resources/resultadoReview'

function Reviews({ reviews }) {
    const [visibleReviews, setVisibleReviews] = useState(6);

    const handleShowMore = () => {
        setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 6);
    }

    return (
        <div className='containerReviews'>
            <h4>Reseñas</h4>
            <div className='containerReviewsInterior'>
                {rew.result.slice(0, visibleReviews).map((element, index) => (
                    <Review review={element} key={index} {...element} />
                ))}
            </div>
            {visibleReviews < rew.result.length && (
                <div className='containerMostrarMas' onClick={handleShowMore}>
                    <img src={icono} alt="Mostrar más" />
                    <p>Mostrar más</p>
                </div>
            )}
        </div>
    )
}

export default Reviews
