import { useEffect, useState } from "react";
import j1 from "../Audios/Jazz/bossa-nova-piano-instrumental-brasil-5732.mp3";
import j2 from "../Audios/Jazz/desitalk-exclusive-life-is-strange-cold-breeze-acoustic-version-15168.mp3";
import j3 from "../Audios/Jazz/nightlife-michael-kobrin-95bpm-3783.mp3";
import j4 from "../Audios/Jazz/spanish-beach-109195.mp3";
import Audio from "./Audio";

/*___________________________________________________________________________________*/

const AudioType = (props) => {
  // First Section
  const [rates1, setRates1] = useState([
    { name: "Bossa Nova", rate: 0 },
    { name: "Desitalk Exclusive Life", rate: 0 },
    { name: "Nightlife Michael Kobrin", rate: 0 },
    { name: "Spanish beach", rate: 0 },
  ]);
  const [comment1, setComment1] = useState([""]);
  // Second Section
  const [rates2, setRates2] = useState([
    { name: "Bossa Nova", rate: 0 },
    { name: "Desitalk Exclusive Life", rate: 0 },
    { name: "Nightlife Michael Kobrin", rate: 0 },
    { name: "Spanish beach", rate: 0 },
  ]);
  const [comment2, setComment2] = useState([""]);
  // Third Section
  const [rates3, setRates3] = useState([
    { name: "Bossa Nova", rate: 0 },
    { name: "Desitalk Exclusive Life", rate: 0 },
    { name: "Nightlife Michael Kobrin", rate: 0 },
    { name: "Spanish beach", rate: 0 },
  ]);
  const [comment3, setComment3] = useState([""]);

  useEffect(() => {
    props.setData({
      type: props.type,
      audios: [rates1, rates2, rates3],
      comments: [comment1, comment2, comment3],
    });
  }, [rates1, rates2, rates3, comment1, comment2, comment3]);

  return (
    <>
      {[...Array(3)].map((a, id) => {
        if (id === 0) {
          const rates = rates1;
          const setRates = setRates1();
          const comment = comment1;
          const setComment = setComment1();
        } else if (id === 1) {
          const rates = rates2;
          const setRates = setRates2();
          const comment = comment2;
          const setComment = setComment2();
        } else {
          const rates = rates3;
          const setRates = setRates3();
          const comment = comment3;
          const setComment = setComment3();
        }

        return (
          <div
            key={id}
            className="mt-5 p-4 d-flex flex-column gap-4 border"
            style={{ width: "400px" }}
          >
            <h3 className="text-center">
              {props.type}-{id + 1}
            </h3>
            <ul>
              <Audio
                name="Bossa Nova"
                id={j1}
                rates={rates}
                setRate={setRates}
              />
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
              <Audio
                name="Spanish beach"
                id={j4}
                rates={rates}
                setRate={setRates}
              />
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
      })}
    </>
  );
};
export default AudioType;

/*___________________________________________________________________________________*/
