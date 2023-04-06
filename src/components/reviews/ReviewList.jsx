import { useEffect, useState } from "react";

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(1);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    fetch(`/api/get-reviews/${props.lawyerId}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  const handleAddReview = () => {
    // 리뷰와 평점 작성 API 호출 및 업데이트 구현
  };

  const handleAddReply = (reviewId) => {
    // 리뷰에 답글 작성 API 호출 및 업데이트 구현
  };

  return (
    <div className="lawyer-info">
      <h1>Reviews</h1>
      {isLoggedIn && (
        <div>
          <h2>Write a Review</h2>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            rows="4"
            cols="50"
          />
          <div>
            <label>Rating:</label>
            <input
              type="number"
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
              min="1"
              max="5"
            />
          </div>
          <button onClick={handleAddReview}>Submit Review</button>
        </div>
      )}
      <div className="row">
        {reviews.map((review) => (
          <div key={review.id} className="mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  회원 ID: {review.member_id}{" "}
                  <span className="card-subtitle mb-2 text-muted">
                    평점: {review.rating}
                  </span>
                </h5>
                <p className="card-text">{review.review_text}</p>
              </div>
              <div className="card-footer">
                <h6>Replies:</h6>
                <ul className="list-unstyled">
                  {review.replies.map((reply, index) => (
                    <li key={index} className="mb-2">
                      <small className="text-muted">{index + 1}. </small>
                      {reply}
                    </li>
                  ))}
                </ul>
                {isLoggedIn && user.id === "특정 아이디" && (
                  <div>
                    <input
                      type="text"
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                      placeholder="Write a reply..."
                    />
                    <button onClick={() => handleAddReply(review.id)}>
                      Add Reply
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
