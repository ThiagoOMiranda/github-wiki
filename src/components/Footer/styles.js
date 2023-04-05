import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 3.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;

  background-color: #364767;
  color: #fbfbfb90;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);

  p {
    & + p {
      margin-top: 10px;
    }
    font-size: 0.8rem;
    font-style: italic;
  }
`;
