import { useEffect, useState } from "react";
import Audio from "./Audio";
/*___________________________________________________________________________________*/

const AudioType = (props) => {
  const [rates, setRates] = useState([
    { name: "NA", rate: 0 },
    { name: "NA", rate: 0 },
    { name: "NA", rate: 0 },
    { name: "NA", rate: 0 },
  ]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    props.setData([
      {
        type: props.type,
        audios: rates,
        comment,
      },
    ]);
  },[rates,comment]);

  return (
    <div
      className="mt-5 p-4 d-flex flex-column gap-4 border"
      style={{ width: "400px" }}
    >
      <h3 className="text-center">{props.type}</h3>
      <ul>
        {props.audio.map((item, index) => (
          <Audio
            key={index}
            name={item.audioName}
            id={item.audioAddress}
            rates={rates}
            setRate={setRates}
          />
        ))}
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
