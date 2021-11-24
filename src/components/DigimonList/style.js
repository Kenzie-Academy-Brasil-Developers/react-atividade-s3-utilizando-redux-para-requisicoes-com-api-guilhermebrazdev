import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* padding: 30px; */

  div {
    display: flex;
    /* background-color: blue; */
    margin-top: 20px;
    align-items: center;
    width: 100%;

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      background: blue;
      height: 100px;
      border-radius: 8px;
      color: white;

      h3 {
        margin: 0px;
      }
    }

    img {
      height: 100px;
      border-radius: 100%;
    }
  }
`;
