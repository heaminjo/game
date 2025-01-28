import styled from "styled-components";
import Button from "./Button";
import { useEffect } from "react";

const ModalComp = styled.div`
  width: 500px;
  height: 500px;
  background-color: #f4d161;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #000, 3px 3px 7px lightblue;
  .top {
    text-align: center;
    height: 320px;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 60px;
    }
    .timeText {
      font-size: 20px;
    }
  }
  .bottom {
    height: 180px;
    position: relative;
    button {
      position: absolute;
      top: 50px;
      left: 75px;
    }
  }
`;
const WinModal = (props) => {
  const { clickEvt, className, pass, defender } = props;

  return (
    <ModalComp className={className}>
      <div className="top">
        <h2>방어 성공 !</h2>
        <p className="timeText">
          <b>성공 시간</b> <br />
          {pass / 1000}.{pass % 1000}초
        </p>
        <p className="timeText">
          <b>방어 시간</b> <br />
          {defender / 1000}.{defender % 1000}초
        </p>
      </div>
      <div className="bottom">
        <Button clickEvt={() => clickEvt()} text="NEXT" id="NextButton" />
      </div>
    </ModalComp>
  );
};
export default WinModal;
