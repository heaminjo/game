import styled from "styled-components";

const AttackComp = styled.img`
  @keyframes identifier {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(900px);
    }
  }

  &.start {
    animation-name: identifier;
    animation-duration: 0.2s;
    animation-delay: ${(props) => props.timing + "s" || "0s"};
  }
`;
const Attacker = (props) => {
  const { src, timing, play } = props;
  return (
    <AttackComp src={src} timing={timing} className={play ? "start" : ""} />
  );
};
export default Attacker;
