import styled from "styled-components";

const ButtonComp = styled.button`
  width: 400px;
  height: 150px;
  color: #fff;
  background-color: rgba(255, 200, 0);
  font-size: 60px;
  border-radius: 20px;
  border: 2px solid #fff;
  text-shadow: 2px 1px 10px black;
  cursor: pointer;
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
`;
const Button = (props) => {
  const { clickEvt, play } = props;
  return (
    <ButtonComp onClick={clickEvt()} className={play ? "hide" : "show"}>
      START !
    </ButtonComp>
  );
};
export default Button;
