import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 1rem 0 3.5rem 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;

  img.logo {
    margin-top: 25px;
    animation: blink ease 1.5s alternate infinite;
  }

  & > p {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  @keyframes blink {
    from {
      filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.25));
    }
    to {
      filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.75));
    }
  }
`;
