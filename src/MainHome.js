import styled from "styled-components";
import person from "../src/image/용사.png";
import Title from "./TitleFont";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import Attacker from "./Attacker";
import Defender from "./Defender";
import DefenderButton from "./DefenderButton";

const HomeCom = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  .container {
    background-color: lightblue;
    height: 100vh;
    header {
      width: 100%;
      height: 220px;
    }
    main {
      width: 100%;
      height: 635px;
      background-color: lightblue;

      section {
        width: 60%;
        margin: 0 auto;
      }
      .sec_top {
        height: 240px;
        position: relative;

        //카운트 숫자자
        @keyframes countEffect {
          from {
            font-size: 0px;
          }
          to {
            font-size: 11em;
          }
        }
        span {
          font-size: 0px;
          position: absolute;
          left: 50%;
          margin-left: -45px;
          text-shadow: 2px 2px 6px #000;
          animation-name: countEffect;
          animation-duration: 1s;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
        }
        button {
          position: absolute;
          cursor: pointer;
        }
        //스타트 버튼
        button:nth-child(1) {
          left: 50%;
          margin-left: -200px;
        }
        button:nth-child(1):hover {
          background-color: rgba(255, 150, 0);
          font-size: 70px;
          text-shadow: 3px 5px 20px black;
        }
        //방어버튼
        button:nth-child(2) {
          right: 40px;
        }
        button:nth-child(2):hover {
          background-color: #bd1f0d;
        }
        button:nth-child(2):active {
          box-shadow: 1px 1px 6px #000;
          right: 35px;
        }
      }
      .sec_bottom {
        height: 415px;
        position: relative;
        img {
          position: absolute;
        }
        //공격자
        img:first-child {
          left: 0;
        }
        //방어자
        img:nth-child(2) {
          right: 0;
        }
      }
    }
    footer {
      background-color: yellowgreen;
      height: 20%;
    }
  }
`;

const MainHome = () => {
  const [timing, setTiming] = useState(0); //공격 시간
  const [play, setPlay] = useState(false); //라운드 시작 끝
  const [round, setRound] = useState(0); //라운드
  const [count, setCount] = useState(0); //카운트
  const [isWin, setIsWin] = useState(false); //승리 or 패배
  const [isLose, setIsLose] = useState(false);

  const attackTiming = useRef(0); //공격 타이밍
  const startTime = useRef(0); //시작 시간 저장

  //start 버튼 클릭
  const onClickStart = () => {
    randomAttackTime(); //공격시간 지정
    console.log("클릭");
    setPlay(!play);
    setRound(round + 1); //라운드 업

    setCount(3);

    const date = new Date();
    startTime.current = date.getSeconds(); // start 시점 초 저장
    console.log(startTime.current);
  };

  //랜덤 공격 시간
  const randomAttackTime = () => {
    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);

    attackTiming.current = getRandom(1, 10);
  };

  //방어 버튼 클릭
  const clickDefenderBtn = () => {
    const date = new Date();
    const clickSec = date.getSeconds(); ///클릭한 시간 초 얻기
    console.log(clickSec);

    const pass = startTime.current + attackTiming.current + 3; // 통과 시간

    //만약 60초가 넘는다면 60 빼기
    if (pass >= 60) {
      pass -= 60;
    }
    console.log("통과시간" + pass);
    setIsWin(
      parseFloat(pass) - 0.5 < clickSec && parseFloat(pass) + 0.5 > clickSec
        ? setIsWin(true)
        : setIsLose(true)
    );
    console.log(isWin);
  };

  // const countDown = () => {
  //   let num = count - 1;
  //   setCount(num);
  //   console.log(num);
  // };

  // //3 카운트
  // const countNum = () => {
  //   //1초 단위로 countDown 함수 실행
  //   const interval = setInterval(() => {
  //     countDown();
  //   }, 1000);

  //   //3초뒤 실행 중지
  //   setTimeout(function () {
  //     clearInterval(interval);
  //   }, 3000);
  // };

  useEffect(() => {
    count > 0 && setTimeout(() => setCount(count - 1), 1000);
  }, [count]);
  //well-made-codestory.tistory.com/45 [SJ BackEnd Log:티스토리]
  출처: https: return (
    <HomeCom>
      <div className="container">
        <header>
          <div className="title">
            <Title></Title>
          </div>
        </header>
        <main>
          <h1>랜덤 {attackTiming.current}</h1>
          <h1>라운드 :{round}</h1>
          <section>
            {/* 버튼 요소들  */}
            <div class="sec_top">
              <Button clickEvt={() => onClickStart} play={play} />
              <DefenderButton play={play} clickEvt={() => clickDefenderBtn} />
              {count > 0 && <span>{count}</span>}
              {isWin ? <p>성공</p> : <p>실패</p>}
            </div>
            {/* 캐릭터 요소들  */}
            <div class="sec_bottom">
              <Attacker
                src={person}
                attackTiming={attackTiming.current}
                play={play}
              />
              <Defender src={person} attackTiming={attackTiming.current} />
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </HomeCom>
  );
};
export default MainHome;
