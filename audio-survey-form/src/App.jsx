import { useState } from "react";
import j1 from "./Audios/Jazz/bossa-nova-piano-instrumental-brasil-5732.mp3";
import j2 from "./Audios/Jazz/desitalk-exclusive-life-is-strange-cold-breeze-acoustic-version-15168.mp3";
import j3 from "./Audios/Jazz/nightlife-michael-kobrin-95bpm-3783.mp3";
import j4 from "./Audios/Jazz/spanish-beach-109195.mp3";
import Audio from "./Components/Audio";
import styled from "styled-components";

/*___________________________________________________________________________________*/

function App() {
  const [name, setName] = useState("");
  const [country, setCuontry] = useState("");
  const [age, setAge] = useState();

  return (
    <div className="App">
      <Header>Audio Survey Form</Header>
      <section className="info">
        <p className="text-center mb-5">
          Thank you for participating. <br />
          Please Rate the following audio files
        </p>
        <Form className=" w-25 d-flex flex-column gap-3">
          <div className="name">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="Enter Your Name" />
          </div>

          <div className="country">
            <label htmlFor="country">Nationality</label>
            <input type="text" placeholder="Enter Your Country" />
          </div>

          <div className="age">
            <label htmlFor="age">Your Age</label>
            <input type="number" placeholder="Your Age" />
          </div>
        </Form>
      </section>
      <section className="body">
        <article
          className="rate mt-5 pt-5 d-flex flex-column gap-4"
          style={{ width: "350px" }}
        >
          <h3>Jazz</h3>
          <ul>
            <Audio name="Bossa Nova" id={j1} />
            <Audio name="Desitalk Exclusive Life" id={j2} />
            <Audio name="Nightlife Michael Kobrin" id={j3} />
            <Audio name="Spanish beach" id={j4} />
          <textarea rows={4} className="w-100" placeholder="Comment Section"></textarea>
          </ul>
        </article>
      </section>
    </div>
  );
}
export default App;

/*___________________________________________________________________________________*/

const Header = styled.h1`
  width: fit-content;
  letter-spacing: -1px;
  margin: 50px auto 20px;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid black;
  position: relative;
  z-index: 1;
  transition: 0.3s;
  cursor: grabbing;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #2196f3;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    left: -30px;
  }
  &::after {
    right: -30px;
  }
  &:hover {
    color: white;
    border: 2px solid white;
    transition-delay: 0.5s;
  }
  &:hover::before {
    z-index: -1;
    animation: right 0.5s linear forwards;
  }
  &:hover::after {
    z-index: -1;
    animation: left 0.5s linear forwards;
  }
`;

const Form = styled.div`
  border: 1px solid #eee;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  margin: auto;
  input {
    display: block;
    width: 100%;
    margin-bottom: 25px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #f9f9f9;
    caret-color: var(--mcolor);
  }
`;
/*___________________________________________________________________________________*/
