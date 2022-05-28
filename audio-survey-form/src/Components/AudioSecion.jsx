import Audio from "./Audio";
import j1 from "../Audios/Jazz/bossa-nova-piano-instrumental-brasil-5732.mp3";
import j2 from "../Audios/Jazz/desitalk-exclusive-life-is-strange-cold-breeze-acoustic-version-15168.mp3";
import j3 from "../Audios/Jazz/nightlife-michael-kobrin-95bpm-3783.mp3";
import j4 from "../Audios/Jazz/spanish-beach-109195.mp3";

/*___________________________________________________________________________________*/

const AudioSecion = (props) => {
  return (
    <div
      className="mt-5 p-4 d-flex flex-column gap-4 border rounded-3"
      style={{ width: "360px" }}
    >
      <h3 className="text-center">
        {props.type}
      </h3>
      <ul>
        <Audio name="Bossa Nova" id={j1} rates={props.rates} setRate={props.setRates} />
        <Audio
          name="Desitalk Exclusive Life"
          id={j2}
          rates={props.rates}
          setRate={props.setRates}
        />
        <Audio
          name="Nightlife Michael Kobrin"
          id={j3}
          rates={props.rates}
          setRate={props.setRates}
        />
        <Audio name="Spanish beach" id={j4} rates={props.rates} setRate={props.setRates} />
        <textarea
          rows={4}
          className="w-100 p-2"
          placeholder="Comment Section"
          // value={comment}
          onChange={(e) => {
            props.setComment(e.currentTarget.value);
          }}
        ></textarea>
      </ul>
    </div>
  );
};
export default AudioSecion;

/*___________________________________________________________________________________*/
