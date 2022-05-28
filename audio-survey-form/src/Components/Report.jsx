import { useEffect, useState } from "react";
import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../Firebase";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Report = () => {
  const [data, setData] = useState([]);
  console.log(data);

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
          className="w-75 mx-auto p-4 my-5 border border-info d-flex flex-column"
        >
          <article className="d-flex justify-content-around">
            <span>Name: {info.name}</span>
            <span>Nationality: {info.country}</span>
            <span>Age: {info.age}</span>
          </article>

          <article className="audioTypes mt-5 ">
            {ratings.map((audio, id) => (
              <div className="row gap-5 mb-5">
                <h4 className="text-center border">{audio.type}</h4>
                {audio.sections.map((audio, id) => (
                  <div key={id} className=" col border px-3 py-2">
                    <h5>Your favourite {audio.type} songs by order:</h5>
                    <ol className="ps-4 pt-3">
                      {audio.audio
                        .sort((a, b) => b.rate - a.rate)
                        .map((audio) => (
                          <li className=" pb-3  mb-3 border-bottom d-flex justify-content-between">
                            {audio.name}
                            <span>
                              {[...Array(4)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                  <FaStar
                                    color={
                                      i + 1 <= audio.rate
                                        ? "#ffc107"
                                        : "#e4e5e9"
                                    }
                                  />
                                );
                              })}
                            </span>
                          </li>
                        ))}
                    </ol>
                  </div>
                ))}
              </div>
            ))}
          </article>
        </section>
      ))}
      <Link to={"/"}>
        <button className="btn btn-info d-flex mx-auto my-5 text-decoration-none ">
          Go Back..
        </button>
      </Link>
    </>
  );
};
export default Report;
