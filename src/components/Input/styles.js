import styled from "styled-components";

export const InputContainer = styled.div`
  height: 65px;
  width: 80%;

  display: inline-flex;
  align-items: center;

  margin: 40px 0;
  padding: 8px;
  border: 1px solid #fafafa;
  border-radius: 10px;
  background: rgba(173, 181, 189, 0.075);

  input {
    width: 88%;
    height: 62px;

    font-size: 1.125rem;

    border: 0;
    padding: 0 20px;

    color: #fff;
    background: transparent;
  }

  input:focus {
    outline: none;
  }

  &:focus-within {
    border: 1px solid #fff;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }

  input::placeholder {
    color: #fafafa95;
    font-style: italic;
  }

  // Styles for small screens (max-width: 768px)
  @media (max-width: 768px) {
    & {
      height: 120px;
      display: flex;
      flex-direction: column;
    }
    input {
      width: 100%;
      padding: 0 10px;
      &::placeholder {
        text-align: center;
      }
    }
    button {
      width: 100%;
      height: 40%;
      font-size: larger;
    }
  }
`;
