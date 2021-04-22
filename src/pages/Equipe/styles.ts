import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: max(55%, 800px);
  max-height: max(40vh, 300px);
  margin: 2rem 0;
  margin-top: 3rem;
  overflow-y: auto;
  padding-right: 1.5rem;

  @media (max-width: 769px) {
    width: 100%;
    height: unset;
    max-height: unset;
    overflow-y: unset;
    padding-right: 0;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f5f5f5;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background-color: #555;
  }
`;
