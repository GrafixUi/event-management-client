import "./rating.css";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useStore } from "../../../utils/store";
import { reviewsData } from "../../../utils/store";
import { axiosAuth } from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    username: "Sara Jones",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    username: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    username: "Jane Doe",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    username: "Jane Doe",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    username: "Jane Doe",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    username: "Jane Doe",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Review = (type) => {
  const userData = useStore((state) => state.userData);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState(null);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await axiosAuth.get(
          `${process.env.REACT_APP_BACKENDURL}/reviews?filters[${type.type}id][$eq]=${type.id}`
        );
        setReviews(reviews.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    console.log(type.id)
    if (rating === null || message === null)
      return alert("Please fill all the fields");
    if (userData === null) {
      navigate("/login");
    }
    try {
      if(type.type === 'event'){
        const review = await axiosAuth.post(
            `${process.env.REACT_APP_BACKENDURL}/reviews`,
            {
              data: {
                rating: rating,
                message: message,
                eventid: Number(type?.id),
                userid: userData.id,
                username: userData.username,
              },
            }
          );
          if (review.status === 200) {
            setReviews([review.data.data, ...reviews]);
            setMessage("");
            setRating(null);
          }
      }
      else{
        const review = await axiosAuth.post(
            `${process.env.REACT_APP_BACKENDURL}/reviews`,
            {
              data: {
                rating: rating,
                message: message,
                movieid: Number(type?.id),
                userid: userData?.id,
                username: userData?.username,
              },
            }
          );
          if (review.status === 200) {
            setReviews([review.data.data, ...reviews]);
            setMessage("");
            setRating(null);
          }
      }
    } catch (err) {
      console.log(err);
    }
  };
console.log(reviews);
  const reviewExist = reviews.find(
    (review) => review.attributes.userid === userData?.id
  );
  console.log(reviewExist);

  return (
    <>
      <div className="mt-10">
        <h2 class="text-gray-800 text-3xl font-semibold text-center">
          Reviews
        </h2>
        <div className="flex flex-wrap mt-4 mr-5">
          <div className="py-3 sm:max-w-xl sm:mx-auto lg:w-1/2  w-full">
            <div class="bg-gray-200 min-w-1xl flex flex-col rounded-xl shadow-lg">
              <div class="px-12 py-5">
                <h2 class="text-gray-800 text-3xl font-semibold text-center">
                  Add your review
                </h2>
              </div>
              <div class="bg-gray-200 w-full flex flex-col items-center rounded-xl">
                <div class="flex flex-col items-center py-6 space-y-3">
                  <div class="flex space-x-3">
                    <div className="rating">
                      {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                          <label>
                            <input
                              type="radio"
                              name="rating"
                              value={currentRating}
                              onClick={() => setRating(currentRating)}
                            />
                            <FaStar
                              className="star"
                              size={20}
                              color={
                                currentRating <= (hover || rating)
                                  ? "#ffc107"
                                  : "#A0AEC0"
                              }
                              onMouseEnter={() => setHover(currentRating)}
                              onMouseLeave={() => setHover(null)}
                            />
                          </label>
                        );
                      })}
                      <p>{rating}</p>
                    </div>
                  </div>
                </div>
                <form class="w-3/4 flex flex-col" onSubmit={handleReviewSubmit}>
                  <textarea
                    value={message}
                    rows="3"
                    class="p-4 text-gray-500 rounded-xl resize-none"
                    required
                    placeholder="Your review"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    disabled={reviewExist}
                    class={`py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white ${reviewExist && "opacity-50 cursor-not-allowed"}`}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full overflow-y-scroll no-scrollbar px-0 sm:px-12 xl:px-0  max-h-[400px]">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="mb-4 p-4 bg-gray-200 rounded-md "
              >
                <div className="flex items-center">
                  {/* <img
              className="w-10 h-10 me-4 rounded-full"
              src="https://res.cloudinary.com/dguumvj8i/image/upload/f_auto,q_auto/si9gdbuv6wxvngcfipbo"
              alt=""
            /> */}
                  <div className="font-medium dark:text-white">
                    <p>{review?.attributes?.username}</p>
                  </div>
                </div>
                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse text-yellow-400">
                  {review?.attributes?.rating} Stars
                </div>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {review?.attributes?.message}
                </p>
              </article>
            ))}
            {
                reviews.length === 0 && <h1 className="text-center text-xl font-semibold">Be the first person to add review!</h1>
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default Review;
