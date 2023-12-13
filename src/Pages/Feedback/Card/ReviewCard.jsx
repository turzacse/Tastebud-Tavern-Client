import StarRatings from "react-star-ratings";


const ReviewCard = ({ review }) => {
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/9rczVxc/user.png" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl font-bold text-blue-500">{review.user}</h2>
                    <p>{review.comment}</p>
                    <p className="text-blue-400">{review.date}</p>
                    <StarRatings
                        rating={review.rating}
                        starDimension="40px"
                        starSpacing="2px"
                        starRatedColor="orange"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;