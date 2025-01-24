import styled from "styled-components";
import person from "../src/image/용사.png";
import Title from "./TitleFont";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import Attacker from "./Attacker";
import Defender from "./Defender";
import WinModal from "./WinModal";
import LoseModal from "./LoseModal";

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
      height: 655px;
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
        //스타트 버튼
        #StartButton {
          position: absolute;
          left: 50%;
          margin-left: -200px;
        }
        #StartButton:hover {
          background-color: rgba(255, 150, 0);
          font-size: 70px;
          text-shadow: 3px 5px 20px black;
        }

        //방어버튼
        #DefenderButton {
          position: absolute;
          right: 40px;
        }
        #DefenderButton:hover {
          background-color: #bd1f0d;
        }
        #DefenderButton:active {
          box-shadow: 1px 1px 6px #000;
          right: 35px;
        }
        //성공 모달
        .modal {
          position: absolute;
          left: 50%;
          margin-left: -250px;
          z-index: 10;
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
        h3 {
          position: absolute;
          left: 50%;
          margin-left: -150px;
          bottom: 150px;
          font-size: 70px;
          color: #fff;
          text-shadow: 2px 2px 2px #999;
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
  const [play, setPlay] = useState(false); //라운드 시작 끝
  const [round, setRound] = useState(0); //라운드
  const [count, setCount] = useState(0); //카운트

  const isWin = useRef(false); //승리 창창
  const isLose = useRef(false); //패배 창
  const attackTiming = useRef(0); //공격 타이밍
  const startTime = useRef(0); //시작 시간 저장

  //start 버튼 클릭
  const onClickStart = () => {
    //시작하면 창 모두 내림림
    isWin.current = false;
    isLose.current = false;

    randomAttackTime(); //공격시간 지정
    setPlay(!play); //게임 시작
    setRound(round + 1); //라운드 업

    setCount(3);

    const date = new Date();
    console.log(date.getMilliseconds());
    startTime.current = 1000 * date.getSeconds() + date.getMilliseconds(); // start 시점 초 저장
  };

  //다음 라운드 클릭
  const onClickNext = () => {
    setRound(round + 1);
    onClickStart();
  };

  // 다시하기 클릭
  const onClickAgain = () => {
    setRound(0);
    onClickStart();
  };

  //종료 클릭
  const onClickEnd = () => {
    isLose.current = false;
    setRound(0);
  };
  //** 랜덤 공격 시간 **
  const randomAttackTime = () => {
    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);

    attackTiming.current = getRandom(1, 10);
  };

  //** 방어 버튼 클릭 **
  const clickDefenderBtn = () => {
    const date = new Date();
    const clickSec = 1000 * date.getSeconds() + date.getMilliseconds(); ///클릭한 시간 초 얻기

    let pass = startTime.current + attackTiming.current * 1000 + 3000; // 통과 시간

    console.log("클릭 시간" + clickSec);
    console.log("통과 시간" + pass);

    //결과 판단
    // console.log(pass === clickSec);
    pass - 100 < clickSec && pass + 200 > clickSec
      ? (isWin.current = true)
      : (isLose.current = true);

    console.log(`성공?: ${isWin.current}`);
    console.log(`실패?: ${isLose.current}`);
    setPlay(!play); //게임 종료(라운드)
  };

  //카운트가 변화하면 실행
  useEffect(() => {
    count > 0 && setTimeout(() => setCount(count - 1), 1000);
  }, [count]);

  return (
    <HomeCom>
      <div className="container">
        <header>
          <div className="title">
            <Title></Title>
          </div>
        </header>
        <main>
          <section>
            {/* 버튼 요소들  */}
            <div class="sec_top">
              <Button
                id="StartButton"
                clickEvt={() => onClickStart}
                play={play}
                text="START !"
              />
              <Button
                id="DefenderButton"
                play={!play}
                clickEvt={() => clickDefenderBtn}
                text="방어"
              />
              {count > 0 && <span>{count}</span>}
              {isWin.current && (
                <WinModal className="modal" clickEvt={() => onClickNext} />
              )}
              {isLose.current && (
                <LoseModal
                  className="modal"
                  clickEvt1={() => onClickAgain}
                  clickEvt2={() => onClickEnd}
                />
              )}
            </div>
            {/* 캐릭터 요소들  */}
            <div class="sec_bottom">
              <Attacker
                src={person}
                attackTiming={attackTiming.current}
                play={play}
              />
              <Defender src={person} attackTiming={attackTiming.current} />
              {count > 0 && <h3>{round} 라운드</h3>}
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </HomeCom>
  );
};
export default MainHome;
