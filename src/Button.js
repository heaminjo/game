import styled from "styled-components";

const ButtonComp = styled.button`
  cursor: pointer;
  //방어 버튼 스타일일
  &#DefenderButton {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: #ec6d44;
    border: 2px solid #ec6d44;
    box-shadow: 6px 6px 8px #000;

    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000;
    color: rgb(254, 218, 206);
  }
  //시작버튼
  &#StartButton {
    width: 400px;
    height: 150px;
    background-color: rgba(255, 200, 0);
    border-radius: 20px;
    border: 2px solid #fff;

    font-size: 60px;
    color: #fff;
    text-shadow: 2px 1px 10px black;
  }
  //다음 라운드 버튼
  &#NextButton {
    width: 350px;
    height: 100px;
    background-color: #eee;
    border-radius: 10px;
    font-size: 30px;
    font-weight: bold;
  }
  //종료 버튼
  &#EndButton,
  &#AgainButton {
    width: 200px;
    height: 80px;
    border-radius: 10px;
    background-color: #eee;
    border: 3px solid #ccc;
    font-size: 30px;
  }
  &#EndButton:hover,
  &#AgainButton:hover {
    background-color: lightgray;
    font-size: 33px;
  }
  &#AgainButton {
  }
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
`;
const Button = (props) => {
  const { clickEvt, play, id, text } = props;
  return (
    <ButtonComp onClick={clickEvt()} id={id} className={play ? "hide" : "show"}>
      {text}
    </ButtonComp>
  );
};
export default Button;
