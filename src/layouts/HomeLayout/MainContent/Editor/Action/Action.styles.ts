import styled from "styled-components";

export const Wrapper = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme?.color?.borderColor}`};
  padding: 8px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const LeftAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const RightAction = styled.div`
  display: flex;
  cursor: pointer;

  button {
    border: none;
    background: none;

    &:focus-visible {
      outline: 2px solid #2684ff;
      outline-offset: 2px;
    }
  }
`;
