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
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;
const LoseModal = (props) => {
  const { clickEvt1, clickEvt2, className } = props;
  return (
    <ModalComp className={className}>
      <div className="top">
        <h2>ㅋ 느려 ㅋ^</h2>
      </div>
      <div className="bottom">
        <Button clickEvt={() => clickEvt1()} text="다시하기" id="AgainButton" />
        <Button clickEvt={() => clickEvt2()} text="종료" id="EndButton" />
      </div>
    </ModalComp>
  );
};
export default LoseModal;
