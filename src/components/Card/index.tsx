import React from 'react';
import { StyledCard, Content } from './styles';

interface Props {
  id?: number;
  name?: string;
  job?: string;
  hobbies?: Array<string>;
  ref?: React.LegacyRef<HTMLDivElement>;
}

const Card: React.FC<Props> = ({ id, name, job, hobbies, children }) => {
  return (
    <StyledCard>
      <div>{children}</div>
      <Content>
        <h3>{name}</h3>
        <p>
          <em>Role: </em>
          {job}
        </p>
        <p>
          <em>Hobbies: </em>
          {hobbies && hobbies.join(', ')}
          {/* <ul>
            {hobbies?.map(item => (
              <li>{item}</li>
            ))}
          </ul> */}
        </p>
      </Content>

      <span>#{id}</span>
    </StyledCard>
  );
};

export default Card;
