import Audio from "./Audio";

/*___________________________________________________________________________________*/

const AudioSecion = (props) => {
  return (
    <div
      className="mt-5 p-4 d-flex flex-column gap-4 border rounded-3"
      style={{ width: "360px" }}
    >
      <h3 className="text-center">{props.type}</h3>
      <ul>
        {props.audio.map((item, index) => (
          <Audio
            key={index}
            name={props.rates[index].name}
            source={item}
            rates={props.rates}
            setRate={props.setRates}
          />
        ))}
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
