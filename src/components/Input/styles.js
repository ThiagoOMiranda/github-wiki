import styled from "styled-components";

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 80%;
  padding: 8px;
  margin-bottom: 40px;
  border: 1px solid #fafafa;
  border-radius: 10px;
  background: rgba(173, 181, 189, 0.075);

  input {
    width: 88%;
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
      display: flex;
      flex-direction: column;
    }
    input {
      padding: 15px 5px 25px;
      &::placeholder {
        text-align: center;
      }
    }
    button {
      width: 100%;
      font-size: larger;
    }
  }
`;
