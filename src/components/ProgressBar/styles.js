import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  div.session-bar {
    width: 100%;
    display: flex;
    height: 20px;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    margin-bottom: 20px;

    span.meter-bar {
      display: inline-flex;
      align-items: center;
    }
  }
`;
