import { useEffect, useState } from "react";
import j1 from "../Audios/Jazz/bossa-nova-piano-instrumental-brasil-5732.mp3";
import j2 from "../Audios/Jazz/desitalk-exclusive-life-is-strange-cold-breeze-acoustic-version-15168.mp3";
import j3 from "../Audios/Jazz/nightlife-michael-kobrin-95bpm-3783.mp3";
import j4 from "../Audios/Jazz/spanish-beach-109195.mp3";
import Audio from "./Audio";

/*___________________________________________________________________________________*/

const AudioType = (props) => {
  const [rates, setRates] = useState([
    { name: "Bossa Nova", rate: 0 },
    { name: "Desitalk Exclusive Life", rate: 0 },
    { name: "Nightlife Michael Kobrin", rate: 0 },
    { name: "Spanish beach", rate: 0 },
  ]);

  const [comment, setComment] = useState("");

  useEffect(() => {
    props.setData({
      type: props.type,
      audios: rates,
      comment,
    });
  }, [rates, comment]);
  return (
    <div
      className="mt-5 p-4 d-flex flex-column gap-4 border"
      style={{ width: "400px" }}
    >
      <h3 className="text-center">{props.type}</h3>
      <ul>
        <Audio name="Bossa Nova" id={j1} rates={rates} setRate={setRates} />
        <Audio
          name="Desitalk Exclusive Life"
          id={j2}
          rates={rates}
          setRate={setRates}
        />
        <Audio
          name="Nightlife Michael Kobrin"
          id={j3}
          rates={rates}
          setRate={setRates}
        />
        <Audio name="Spanish beach" id={j4} rates={rates} setRate={setRates} />
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
