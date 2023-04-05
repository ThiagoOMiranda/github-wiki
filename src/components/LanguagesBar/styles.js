import styled from "styled-components";

export const LanguagesBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    margin-bottom: 10px;
  }

  div.languages-bar {
    width: 100%;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border: 1px solid #fafafa;
    border-radius: 15px;
    overflow: hidden;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.35));

    span.meter-bar {
      height: 100%;
      display: inline-flex;
      align-items: center;
    }
  }

  ul.languages {
    width: 100%;
    display: inline-flex;
    justify-content: space-evenly;
    list-style: none;

    li.language-item {
      display: inline-flex;
      justify-content: center;

      div.list-marker {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        border-radius: 15px;
        border: 1px solid #fafafa;
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
      }

      p {
        margin: 0;
        color: #ddd;
      }
    }
  }
  @media (max-width: 768px) {
    & {
      margin-bottom: 10px;
    }

    div.language-bar {
      margin-bottom: 10px;
    }

    ul.languages {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    li.language-item {
      margin-bottom: 10px;
    }
  }
`;
