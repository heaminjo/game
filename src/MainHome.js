import styled from "styled-components";
import person from "../src/image/용사.png";
import Title from "./TitleFont";
import Button from "./Button";
import { useState } from "react";
import Attacker from "./Attacker";
import Defender from "./Defender";
import DefenderButton from "./DefenderButton";

const HomeCom = styled.section`
  margin: 0;
  padding: 0;
  .container {
    background-color: lightblue;
    height: 100vh;
    header {
      width: 100%;
      height: 20vh;
    }
    main {
      width: 100%;
      height: 80vh;
      #sec01 {
        height: 60%;
        background-color: lightblue;
        button {
          position: absolute;
          top: 350px;
          left: 42%;
        }
        button:hover {
          background-color: rgba(255, 150, 0);
          font-size: 70px;
          text-shadow: 3px 5px 20px black;
        }
      }
      #sec02 {
        height: 40%;
        background-color: yellowgreen;
        img {
          position: absolute;
          bottom: 200px;
        }
        button {
          position: absolute;
          right: 490px;
          top: 250px;
          cursor: pointer;
        }
      }
      #sec02 button:hover {
        font-size: large;
        background-color: #bd1f0d;
      }
      #sec02 button:active {
        box-shadow: 1px 1px 6px #000;
        right: 485px;
      }

      #sec02 img:first-child {
        left: 20%;
      }
      #sec02 img:nth-child(2) {
        right: 20%;
      }
    }
  }
`;

const MainHome = () => {
  const [visible, setVisible] = useState(true);
  const [timing, setTiming] = useState(0);
  const [play, setPlay] = useState(false);

  const onClickStart = () => {
    console.log("클릭");
    setVisible(!visible);
    setPlay(!play);

    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);
    setTiming(getRandom(1, 10));
  };
  return (
    <HomeCom>
      <div className="container">
        <header>
          <div className="title">
            <Title></Title>
          </div>
        </header>
        <main>
          <section id="sec01">
            <Button clickEvt={() => onClickStart} visible={visible} />
            <h1>{timing}</h1>
          </section>
          <section id="sec02">
            <Attacker src={person} timing={timing} play={play} />
            <Defender src={person} timing={timing} />
            <DefenderButton play={play} />
          </section>
        </main>
      </div>
    </HomeCom>
  );
};
export default MainHome;
