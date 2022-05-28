import { useEffect, useState } from "react";
import styled from "styled-components";
import AudioType from "./AudioType";
import axios from "axios";
import { Link } from "react-router-dom";

/*___________________________________________________________________________________*/

function Main() {
  //Info
  const [name, setName] = useState("");
  const [country, setCuontry] = useState("");
  const [age, setAge] = useState(0);

  const [jazz, setJazz] = useState([]);
  const [pop, setPop] = useState([]);
  const [rock, setRock] = useState([]);

  //Ratings

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8080/audio/get-pop-audio")
  //     .then((response) => {
  //       setPop(response.data);
  //     })
  //     .catch((err) => console.log(err));

  //   axios
  //     .get("http://127.0.0.1:8080/audio/get-rock-audio")
  //     .then((response) => {
  //       setRock(response.data);
  //     })
  //     .catch((err) => console.log(err));

  //   axios
  //     .get("http://127.0.0.1:8080/audio/get-jazz-audio")
  //     .then((response) => {
  //       setJazz(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const Submit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      alert("Please enter valid name");
      return;
    }
    if (country.trim().length === 0) {
      alert("Please enter valid email");
      return;
    }
    if (age < 1) {
      alert("Please enter valid age");
      return;
    }

    const newUser = {
      userName: name,
      nationality: country,
      age: age,
      popMusic_1: {
        audios: [
          {
            name: pop.sections[0].audio[0].name,
            rate: pop.sections[0].audio[0].rate,
          },
          {
            name: pop.sections[0].audio[1].name,
            rate: pop.sections[0].audio[1].rate,
          },
          {
            name: pop.sections[0].audio[2].name,
            rate: pop.sections[0].audio[2].rate,
          },
          {
            name: pop.sections[0].audio[3].name,
            rate: pop.sections[0].audio[3].rate,
          },
        ],
        comment: pop.sections[0].comment,
      },
      popMusic_2: {
        audios: [
          {
            name: pop.sections[1].audio[0].name,
            rate: pop.sections[1].audio[0].rate,
          },
          {
            name: pop.sections[1].audio[1].name,
            rate: pop.sections[1].audio[1].rate,
          },
          {
            name: pop.sections[1].audio[2].name,
            rate: pop.sections[1].audio[2].rate,
          },
          {
            name: pop.sections[1].audio[3].name,
            rate: pop.sections[1].audio[3].rate,
          },
        ],
        comment: pop.sections[1].comment,
      },
      popMusic_3: {
        audios: [
          {
            name: pop.sections[2].audio[0].name,
            rate: pop.sections[2].audio[0].rate,
          },
          {
            name: pop.sections[2].audio[1].name,
            rate: pop.sections[2].audio[1].rate,
          },
          {
            name: pop.sections[2].audio[2].name,
            rate: pop.sections[2].audio[2].rate,
          },
          {
            name: pop.sections[2].audio[3].name,
            rate: pop.sections[2].audio[3].rate,
          },
        ],
        comment: pop.sections[2].comment,
      },
      rockMusic_1: {
        audios: [
          {
            name: rock.sections[0].audio[0].name,
            rate: rock.sections[0].audio[0].rate,
          },
          {
            name: rock.sections[0].audio[1].name,
            rate: rock.sections[0].audio[1].rate,
          },
          {
            name: rock.sections[0].audio[2].name,
            rate: rock.sections[0].audio[2].rate,
          },
          {
            name: rock.sections[0].audio[3].name,
            rate: rock.sections[0].audio[3].rate,
          },
        ],
        comment: rock.sections[0].comment,
      },
      rockMusic_2: {
        audios: [
          {
            name: rock.sections[1].audio[0].name,
            rate: rock.sections[1].audio[0].rate,
          },
          {
            name: rock.sections[1].audio[1].name,
            rate: rock.sections[1].audio[1].rate,
          },
          {
            name: rock.sections[1].audio[2].name,
            rate: rock.sections[1].audio[2].rate,
          },
          {
            name: rock.sections[1].audio[3].name,
            rate: rock.sections[1].audio[3].rate,
          },
        ],
        comment: rock.sections[1].comment,
      },
      rockMusic_3: {
        audios: [
          {
            name: rock.sections[2].audio[0].name,
            rate: rock.sections[2].audio[0].rate,
          },
          {
            name: rock.sections[2].audio[1].name,
            rate: rock.sections[2].audio[1].rate,
          },
          {
            name: rock.sections[2].audio[2].name,
            rate: rock.sections[2].audio[2].rate,
          },
          {
            name: rock.sections[2].audio[3].name,
            rate: rock.sections[2].audio[3].rate,
          },
        ],
        comment: rock.sections[2].comment,
      },
      jazzMusic_1: {
        audios: [
          {
            name: jazz.sections[0].audio[0].name,
            rate: jazz.sections[0].audio[0].rate,
          },
          {
            name: jazz.sections[0].audio[1].name,
            rate: jazz.sections[0].audio[1].rate,
          },
          {
            name: jazz.sections[0].audio[2].name,
            rate: jazz.sections[0].audio[2].rate,
          },
          {
            name: jazz.sections[0].audio[3].name,
            rate: jazz.sections[0].audio[3].rate,
          },
        ],
        comment: jazz.sections[0].comment,
      },
      jazzMusic_2: {
        audios: [
          {
            name: jazz.sections[1].audio[0].name,
            rate: jazz.sections[1].audio[0].rate,
          },
          {
            name: jazz.sections[1].audio[1].name,
            rate: jazz.sections[1].audio[1].rate,
          },
          {
            name: jazz.sections[1].audio[2].name,
            rate: jazz.sections[1].audio[2].rate,
          },
          {
            name: jazz.sections[1].audio[3].name,
            rate: jazz.sections[1].audio[3].rate,
          },
        ],
        comment: jazz.sections[1].comment,
      },
      jazzMusic_3: {
        audios: [
          {
            name: jazz.sections[2].audio[0].name,
            rate: jazz.sections[2].audio[0].rate,
          },
          {
            name: jazz.sections[2].audio[1].name,
            rate: jazz.sections[2].audio[1].rate,
          },
          {
            name: jazz.sections[2].audio[2].name,
            rate: jazz.sections[2].audio[2].rate,
          },
          {
            name: jazz.sections[2].audio[3].name,
            rate: jazz.sections[2].audio[3].rate,
          },
        ],
        comment: jazz.sections[2].comment,
      },
    };

    axios
      .post("http://127.0.0.1:8080/user/audio-survey-form", newUser)
      .then((res) => console.log(res))
      .catch((err) => console.log("Error:" + err));
  };

  return (
    <form onSubmit={Submit}>
      <Link to={"/report"}>
        <button className="btn btn-info position-absolute end-0 top-0 m-5 text-white">
          See Reports
        </button>
      </Link>

      <Header>Audio Survey Form</Header>
      <p className="text-center mb-5">
        Thank you for participating. <br />
        Please Rate the following audio files
      </p>

      <UserInfo className=" w-25 d-flex flex-column gap-3">
        <div className="name">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </div>

        <div className="country">
          <label htmlFor="country">Nationality</label>
          <input
            type="text"
            placeholder="Enter your country"
            value={country}
            onChange={(e) => {
              setCuontry(e.currentTarget.value);
            }}
          />
        </div>

        <div className="age">
          <label htmlFor="age">Your Age</label>
          <input
            min={0}
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.currentTarget.value);
            }}
          />
        </div>
      </UserInfo>

      <section className=" flex-wrap d-flex gap-3 justify-content-between p-4 border-top mt-5">
        {/* Should be instead of 'type' an array audio sections containing audio files */}
        <AudioType type="Jazz" setData={setJazz} />
        <AudioType type="Pop" setData={setPop} />
        <AudioType type="Rock" setData={setRock} />
      </section>

      <button className="btn btn-primary my-5 mx-auto d-flex fs-4">
        Submit
      </button>
    </form>
  );
}
export default Main;

/*___________________________________________________________________________________*/

const Header = styled.h1`
  width: fit-content;
  letter-spacing: -1px;
  margin: 50px auto 20px;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid black;
  position: relative;
  z-index: 1;
  transition: 0.3s;
  cursor: grabbing;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #2196f3;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    left: -30px;
  }
  &::after {
    right: -30px;
  }
  &:hover {
    color: white;
    border: 2px solid white;
    transition-delay: 0.5s;
  }
  &:hover::before {
    z-index: -1;
    animation: right 0.5s linear forwards;
  }
  &:hover::after {
    z-index: -1;
    animation: left 0.5s linear forwards;
  }
`;

const UserInfo = styled.div`
  border: 1px solid #eee;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  margin: auto;
  input {
    display: block;
    width: 100%;
    margin-bottom: 25px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #f9f9f9;
    caret-color: var(--mcolor);
  }
`;
/*___________________________________________________________________________________*/
