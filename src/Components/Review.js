import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };
  //you can destructure the object up top so you don't have to repeat writing the word review
  const { title, rating, reviewer, content, id } = review;
  return (
    <>
      <div className="Review">
        {viewEditForm ? (
          <ReviewForm
            reviewDetails={review}
            toggleView={toggleView}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div>
            <h4>
              {title} <span>{rating}</span>
            </h4>
            <h5>{reviewer}</h5>
            <p>{content}</p>

            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        )}

        <button onClick={toggleView}>edit this review</button>
      </div>
    </>
  );
}
//the handle delete function is written this way becuase we want to control when the review is deleted. without giving onClick ()=> then the function would run automatically

export default Review;
