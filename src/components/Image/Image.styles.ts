import styled from "styled-components";

export const Wrapper = styled.button.attrs({
  type: "button",
})`
    background: none;
    margin: auto;
    padding: 1px'
    display: flex;
    width: 90px;
    height: 90px;
    align-items: center;
    justify-content: center;
    border: 1px solid #e6dcdcff;
    border-radius: 8px;
    cursor: default;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
