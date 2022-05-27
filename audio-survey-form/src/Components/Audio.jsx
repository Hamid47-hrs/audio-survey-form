import React, { useRef } from "react";
import styled from "styled-components";
import listIcon from "../SVGS/list.svg";

/*___________________________________________________________________________________*/

const Audio = (props) => {
  const song = useRef();
  return (
    <Container className="mb-4 pb-3 border-bottom">
      <label className="d-flex gap-2 mb-2" htmlFor={props.id}>
        <img src={listIcon} alt="list" style={{ cursor: "pointer" }} />
        {props.name}
      </label>
      <audio id={props.id} src={props.id} controls></audio>
    </Container>
  );
};
export default Audio;

/*___________________________________________________________________________________*/

const Container = styled.li``;

/*___________________________________________________________________________________*/
