import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #242222ff;
  border-radius: 16px;
  padding: 0 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  height: 90px;
  cursor: pointer;
  width: 210px;
  font-size: 25px;

  .p-t {
    font-size: 16px;
  }

  .s-t {
    font-size: 14px;
    color: ${({ theme }) => theme?.color?.secondaryText};
  }

  &: hover {
    background: ${({ theme }) => theme?.color?.hoverColor};
  }
`;
