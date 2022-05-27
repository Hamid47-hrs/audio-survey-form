import { useEffect, useState } from "react";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../Firebase";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const Report = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDB = async () => {
      let arr = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setData(arr);
    };
    fetchDB();
  }, []);
  return (
    <>
      {data.map(({ info, ratings }, id) => (
        <section
          key={id}
          className="w-50 m-auto p-4 mt-5 border d-flex flex-column"
        >
          <article className="d-flex justify-content-around">
            <span>Name: {info.name}</span>
            <span>Nationality: {info.country}</span>
            <span>Age: {info.age}</span>
          </article>

          <article className="audioTypes mt-5 d-flex justify-content-around">
            {ratings.map((audio, id) => (
              <div key={id} className="border px-4 py-2">
                <h4>{audio.type}</h4>
                <ol className="p-0">
                  {audio.audios
                    .sort((a, b) => b.rate - a.rate)
                    .map((audio) => (
                      <li>{audio.name}</li>
                    ))}
                </ol>
              </div>
            ))}
          </article>
        </section>
      ))}
      <Link to={"/"}>
        <button className="btn btn-info d-flex mx-auto my-5 text-decoration-none ">Go Back..</button>
      </Link>
    </>
  );
};
export default Report;
