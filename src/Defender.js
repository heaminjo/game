import styled from "styled-components";

const DefenComp = styled.img``;
const Defender = (props) => {
  const { src, timing } = props;
  return <DefenComp src={src} timing={timing} />;
};
export default Defender;
