import { useState } from "react";
import { FaStar } from "react-icons/fa";

/*___________________________________________________________________________________*/

const Audio = (props) => {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();
  return (
    <div className="mb-4 pb-4 border-bottom" style={{ marginLeft: "-30px" }}>
      <div className="d-flex justify-content-between mb-3">
        <span>{props.name}</span>
        <div>
          {[...Array(4)].map((star, i) => {
            const ratingValue = i + 1;
            const isRatedBefore = props.rates.some(
              (audio) => audio.rate == ratingValue
            );

            return (
              <label aria-disabled style={{ cursor: "pointer" }} key={i}>
                <input
                  disabled={isRatedBefore}
                  hidden
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => {
                    setRating(ratingValue);
                    props.setRate((prev) =>
                      prev.map((audio) =>
                        audio.name === props.name
                          ? { name: props.name, rate: ratingValue }
                          : audio
                      )
                    );
                  }}
                />
                <FaStar
                  onMouseEnter={() => setHover(!isRatedBefore && ratingValue)}
                  onMouseLeave={() => setHover()}
                  color={
                    ratingValue <= (rating || hover) ? "#ffc107" : "#e4e5e9"
                  }
                />
              </label>
            );
          })}
        </div>
      </div>
      <audio id={props.id} src={props.id} controls></audio>
    </div>
  );
};
export default Audio;

/*___________________________________________________________________________________*/
