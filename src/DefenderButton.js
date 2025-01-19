import styled from "styled-components";

const DefenBtnComp = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #ec6d44;
  border: 2px solid #ec6d44;
  box-shadow: 6px 6px 8px #000;
  p {
    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000;
    color: rgb(254, 218, 206);
  }
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
`;
const DefenderButton = (props) => {
  const { play } = props;
  return (
    <DefenBtnComp className={play ? "show" : "hide"}>
      <p>방어</p>
    </DefenBtnComp>
  );
};
export default DefenderButton;
