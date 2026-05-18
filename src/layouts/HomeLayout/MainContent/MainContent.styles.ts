import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .icon-wrapper {
    border-radius: 50px;
    border: 1px solid ${(props) => props?.theme?.color?.text};
    padding: 10px 12px;
    background-color: #0a7fc2ff;
  }

  .p-t {
    font-size: 40px;
    font-weight: 500;
  }

  .s-t {
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: ${({ theme }) => theme?.color?.secondaryText};
  }
`;

export const ScrollableContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: calc(100vh - 200px);
  overflow-y: scroll;
`;
