import styled from "styled-components";

const countComp = styled.p`
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`;
const timerCount = (props) => {
  return <countComp></countComp>;
};
export default timerCount;
