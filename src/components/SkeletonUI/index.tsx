import React from 'react';

import {
  Container,
  SkeletonCard,
  SkeletonAvatar,
  SkeletonContent,
  SkeletonLine,
} from './styles';

const SkeletonUI: React.FC = () => {
  return (
    <Container>
      <SkeletonCard>
        <SkeletonAvatar />
        <SkeletonContent>
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </SkeletonContent>
      </SkeletonCard>
    </Container>
  );
};

export default SkeletonUI;
