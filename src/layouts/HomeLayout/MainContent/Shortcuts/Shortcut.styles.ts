import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  overflow-y: scroll;
  max-height: calc(100vh - 214px);
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `1px solid ${theme?.color?.borderColor}`};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  width: 100px;
  height: 100px;
  cursor: pointer;

  &: hover {
    background: ${({ theme }) => theme?.color?.hoverColor};
  }
`;
