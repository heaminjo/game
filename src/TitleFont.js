import styled from "styled-components";

const HComp = styled.h1`
  @keyframes titleStyle {
    0% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }
  animation-name: titleStyle;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  font-size: 4em;
  margin: 0;
  color: #fff;
  position: absolute;
  right: 40%;
  top: 80px;
  text-shadow: 0px 0px 5px navy;
`;
const Title = () => {
  return <HComp>반응속도 테스트</HComp>;
};
export default Title;
