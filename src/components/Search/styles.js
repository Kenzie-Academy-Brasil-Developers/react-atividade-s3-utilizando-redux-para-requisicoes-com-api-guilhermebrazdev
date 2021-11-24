import styled from "styled-components";

export const Container = styled.div`
  background: orange;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4px;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 4px;

    input {
      width: 120px;
      border-radius: 8px;
      /* border: 0; */
    }

    button {
      border-radius: 8px;
    }
  }
`;
