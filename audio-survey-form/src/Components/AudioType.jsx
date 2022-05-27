import { useEffect, useState } from "react";
import j1 from "../Audios/Jazz/bossa-nova-piano-instrumental-brasil-5732.mp3";
import j2 from "../Audios/Jazz/desitalk-exclusive-life-is-strange-cold-breeze-acoustic-version-15168.mp3";
import j3 from "../Audios/Jazz/nightlife-michael-kobrin-95bpm-3783.mp3";
import j4 from "../Audios/Jazz/spanish-beach-109195.mp3";
import Audio from "./Audio";

/*___________________________________________________________________________________*/

const AudioType = (props) => {
  const [rate1, setRate1] = useState();
  const [rate2, setRate2] = useState();
  const [rate3, setRate3] = useState();
  const [rate4, setRate4] = useState();
  const [comment, setComment] = useState("");
  useEffect(() => {
    props.setData({
      audios: [
        { name: "Bossa Nova", rate: rate1 },
        { name: "Desitalk Exclusive Life", rate: rate2 },
        { name: "Nightlife Michael Kobrin", rate: rate3 },
        { name: "Spanish beach", rate: rate4 },
      ],
      comment,
    });
  }, [rate1, rate2, rate3, rate4, comment]);
  return (
    <div
      className="mt-5 p-4 d-flex flex-column gap-4 border"
      style={{ width: "400px" }}
    >
      <h3 className="text-center">{props.type}</h3>
      <ul>
        <Audio name="Bossa Nova" id={j1} setRate={setRate1} />
        <Audio name="Desitalk Exclusive Life" id={j2} setRate={setRate2} />
        <Audio name="Nightlife Michael Kobrin" id={j3} setRate={setRate3} />
        <Audio name="Spanish beach" id={j4} setRate={setRate4} />
        <textarea
          rows={4}
          className="w-100 p-2"
          placeholder="Comment Section"
          value={comment}
          onChange={(e) => {
            setComment(e.currentTarget.value);
          }}
        ></textarea>
      </ul>
    </div>
  );
};
export default AudioType;

/*___________________________________________________________________________________*/
