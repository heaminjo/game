import styled from "styled-components";
import Button from "./Button";

const ModalComp = styled.div`
  width: 500px;
  height: 500px;
  background-color: #f4d161;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #000, 3px 3px 7px lightblue;
  .top {
    text-align: center;
    height: 250px;
    line-height: 250px;
    h2 {
      font-size: 60px;
    }
  }
  .bottom {
    height: 250px;
    position: relative;
    button {
      position: absolute;
      top: 50px;
      left: 75px;
    }
  }
`;
const WinModal = (props) => {
  const { clickEvt, className } = props;
  return (
    <ModalComp className={className}>
      <div className="top">
        <h2>방어 성공 !</h2>
      </div>
      <div className="bottom">
        <Button clickEvt={() => clickEvt()} text="NEXT" id="NextButton" />
      </div>
    </ModalComp>
  );
};
export default WinModal;
