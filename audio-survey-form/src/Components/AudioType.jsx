import j1 from "../Audios/Jazz/bossa-nova-piano-instrumental-brasil-5732.mp3";
import j2 from "../Audios/Jazz/desitalk-exclusive-life-is-strange-cold-breeze-acoustic-version-15168.mp3";
import j3 from "../Audios/Jazz/nightlife-michael-kobrin-95bpm-3783.mp3";
import j4 from "../Audios/Jazz/spanish-beach-109195.mp3";
import Audio from "./Audio";

/*___________________________________________________________________________________*/

const AudioType = (props) => {
  return (
    <div
      className="mt-5 pt-5 d-flex flex-column gap-4"
      style={{ width: "350px" }}
    >
      <h3 className="text-center">{props.type}</h3>
      <ul>
        <Audio name="Bossa Nova" id={j1} />
        <Audio name="Desitalk Exclusive Life" id={j2} />
        <Audio name="Nightlife Michael Kobrin" id={j3} />
        <Audio name="Spanish beach" id={j4} />
        <textarea
          rows={4}
          className="w-100 p-2"
          placeholder="Comment Section"
        ></textarea>
      </ul>
    </div>
  );
};
export default AudioType;

/*___________________________________________________________________________________*/
