import React, { useEffect, useState } from 'react';
import ReviewCard from '../Card/ReviewCard';

const ReviewHeader = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h2 className='md:text-5xl text-3xl font-bold '>Customer <span className='text-orange-500'>Satisfaction</span>  is <br />Our first <span className='text-orange-500'>Priority</span></h2>
                {/* {reviews.length} */}
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 md:mx-12 mx-4 mt-20'>
                {
                    reviews.map(review => (
                        <ReviewCard key={review.id} review={review}></ReviewCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ReviewHeader;