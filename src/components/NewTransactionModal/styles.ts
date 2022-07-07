import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    padding: 0 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: (--text-body);
    background-color: #e7e9ee;

    ::placeholder {
      color: --var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, "#d7d7d7")};
    }

    img {
      height: 20px;
      width: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  }
`;