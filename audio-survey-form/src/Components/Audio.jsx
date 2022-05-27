import React, { useRef, useState } from "react";
import styled from "styled-components";
import listIcon from "../SVGS/list.svg";
import { FaStar } from "react-icons/fa";

/*___________________________________________________________________________________*/

const Audio = (props) => {
  const song = useRef();
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();
  return (
    <div className="mb-4 pb-4 border-bottom">
      <div className="d-flex justify-content-between mb-3">
        <span>{props.name}</span>
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label style={{ cursor: "pointer" }} key={i}>
                <input
                  hidden
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  onMouseEnter={() => setHover(ratingValue)}
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
