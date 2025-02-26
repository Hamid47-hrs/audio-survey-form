import { useEffect, useState } from "react";
import AudioSecion from "./AudioSecion";

/*___________________________________________________________________________________*/

const AudioType = (props) => {
  // First Section
  const [rates1, setRates1] = useState([
    { name: props.audioFile.section1[0].slice(10), rate: 0 },
    { name: props.audioFile.section1[1].slice(10), rate: 0 },
    { name: props.audioFile.section1[2].slice(10), rate: 0 },
    { name: props.audioFile.section1[3].slice(10), rate: 0 },
  ]);
  const [comment1, setComment1] = useState("");
  // Second Section
  const [rates2, setRates2] = useState([
    { name: props.audioFile.section1[0].slice(10), rate: 0 },
    { name: props.audioFile.section1[1].slice(10), rate: 0 },
    { name: props.audioFile.section1[2].slice(10), rate: 0 },
    { name: props.audioFile.section1[3].slice(10), rate: 0 },
  ]);
  const [comment2, setComment2] = useState("");
  // Third Section
  const [rates3, setRates3] = useState([
    { name: props.audioFile.section1[0].slice(10), rate: 0 },
    { name: props.audioFile.section1[1].slice(10), rate: 0 },
    { name: props.audioFile.section1[2].slice(10), rate: 0 },
    { name: props.audioFile.section1[3].slice(10), rate: 0 },
  ]);
  const [comment3, setComment3] = useState("");

  useEffect(() => {
    props.setData({
      type: props.type,
      sections: [
        { audio: rates1, comment: comment1 },
        { audio: rates2, comment: comment2 },
        { audio: rates3, comment: comment3 },
      ],
    });
  }, [rates1, rates2, rates3, comment1, comment2, comment3]);

  return (
    <>
      <AudioSecion
        type={props.type + -1}
        audio={props.audioFile.section1}
        rates={rates1}
        setRates={setRates1}
        setComment={setComment1}
      />
      <AudioSecion
        type={props.type + -2}
        audio={props.audioFile.section2}
        rates={rates2}
        setRates={setRates2}
        setComment={setComment2}
      />
      <AudioSecion
        type={props.type + -3}
        audio={props.audioFile.section3}
        rates={rates3}
        setRates={setRates3}
        setComment={setComment3}
      />
    </>
  );
};
export default AudioType;

/*___________________________________________________________________________________*/
