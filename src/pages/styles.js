import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1rem 0 3.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;

  img.logo {
    animation: blink ease 1.5s alternate infinite;
    margin-top: 25px;
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
