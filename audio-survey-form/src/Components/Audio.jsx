import { useState } from "react";
import { FaStar } from "react-icons/fa";

/*___________________________________________________________________________________*/

const Audio = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState();
  return (
    <div className="mb-4 pb-4 border-bottom" style={{ marginLeft: "-30px" }}>
      <div className="d-flex justify-content-between mb-3">
        <span>{props.name}</span>
        <div>
          {[...Array(4)].map((star, i) => {
            const ratingValue = i + 1;
            const isRatedBefore = props.rates.some(
              (audio) => audio.rate === ratingValue && audio.name !== props.name
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
                    setRating((prev) =>
                      prev === ratingValue ? null : ratingValue
                    );
                    props.setRate((prev) =>
                      prev.map((audio) =>
                        audio.name === props.name
                          ? audio.rate === ratingValue
                            ? { name: props.name, rate: null }
                            : { name: props.name, rate: ratingValue }
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
      <audio id={props.source} src={props.source} controls></audio>
    </div>
  );
};
export default Audio;

/*___________________________________________________________________________________*/
