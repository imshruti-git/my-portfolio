import styled from "styled-components";
export const Wrapper = styled.div`
  min-height: 60px;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(232, 226, 226, 0.15);

  div {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    padding: 0px 10px;
  }
`;

export const Avatar = styled.div`
  padding: 10px;
  border-radius: 15px;
  background: #d2d2d2;
`;
