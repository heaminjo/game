import styled from "styled-components";
import person from "../src/image/—Pngtree—ancient roman warrior red cartoon_6872625.png";
import Title from "./TitleFont";

const HomeCom = styled.section`
  margin: 0;
  padding: 0;
  .scroll {
    overflow: hidden;
  }
  .container {
    background-color: lightblue;
    height: 100vh;
    header {
      width: 100%;
      height: 200px;
    }
    main {
      width: 100%;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
`;
const MainHome = () => {
  return (
    <HomeCom>
      <div className="container">
        <header>
          <div className="title">
            <Title></Title>
          </div>
        </header>
        <main>
          <section id="sec01"></section>
          <section id="sec02">
            <img src={person} alt="" />
          </section>
        </main>
      </div>
    </HomeCom>
  );
};
export default MainHome;
