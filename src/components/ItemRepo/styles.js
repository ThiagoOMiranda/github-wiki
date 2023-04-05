import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

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

  a {
    width: 15%;

    display: inline-flex;
    align-items: center;
    padding: 2px;

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
    width: 15%;
    display: inline-flex;
    align-items: center;

    padding: 2px;
    margin-top: 8px;
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

    padding: 4px;
    border-radius: 3px;
    margin-right: 1rem;

    background-color: #777;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  }

  // Styles for small screens (max-width: 768px)
  @media (max-width: 768px) {
    a,
    button {
      width: 100%;
    }
  }
`;
