import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px 25px;
  border-radius: 10px;
  margin-bottom: 25px;
  border-bottom: 4px solid #fafafa35;
  background-color: #fafafa10;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #fafafa35;
    border-bottom: 4px solid #fafafa95;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fafafa;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.5));
  }

  p {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 20px;
    color: #fafafa60;
  }

  p.description {
    font-style: normal;
    padding: 20px;
    border-radius: 5px;
    color: #ddd;
    background-color: #cacaca25;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  a {
    display: inline-flex;
    align-items: center;
    width: 15%;
    padding: 2px;
    white-space: nowrap;
    margin-right: 1.5rem;
    font-size: 1rem;
    text-decoration: none;
    color: #ddd;

    &:hover {
      .icon {
        color: #555;
        background-color: #aaa;
      }
      color: #bbb;
    }
  }

  button {
    display: inline-flex;
    align-items: center;
    width: 15%;
    padding: 2px;
    white-space: nowrap;
    font-size: 1rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #ddd;

    &:hover {
      .icon {
        color: #555;
        background-color: #aaa;
      }
      color: #bbb;
    }
  }

  .icon {
    width: 18px;
    height: 18px;
    margin-right: 1rem;
    padding: 4px;
    border-radius: 3px;
    background-color: #777;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  }

  // Styles for small screens (max-width: 768px)
  @media (max-width: 768px) {
    flex-direction: column;

    a {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    a,
    button {
      width: 100%;
    }
  }
`;
