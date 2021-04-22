import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;
export const SkeletonCard = styled.div`
  margin: 0 auto;
  width: calc(max(35vw, 632px));
  min-height: 240px;
  background: #b8b8b8;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 174px 1fr;
  place-items: center;
  gap: 1rem;
  padding: 1rem;
  animation: flash 5s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 150%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    z-index: 1;
    transform: rotate(-45deg) translate3d(0, 0, 0);
    animation: shine 2s ease-in-out infinite;
    filter: blur(100px);

    @media (max-width: 767px) {
      width: 100vw;
    }

    @keyframes shine {
      from {
        transform: rotate(-45deg) translate3d(0, -500%, 0);
        opacity: 0;
      }
      to {
        transform: rotate(-45deg) translate3d(0, 300%, 0);
        opacity: 1;
      }
    }

    @keyframes flash {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;
export const SkeletonAvatar = styled.div`
  width: 174px;
  height: 174px;
  background: #7a6d6d;
  border-radius: 50%;
`;
export const SkeletonContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const SkeletonLine = styled.div`
  width: 80%;
  height: 1rem;
  background: #7a6d6d;
  border-radius: 1rem;
  margin-bottom: 1rem;

  &:first-child {
    width: 100%;
    height: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
