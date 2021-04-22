import React from 'react';

interface Props {
  title: string;
  content: string;
}

const Head: React.FC<Props> = props => {
  React.useEffect(() => {
    document.title = `Scary Page | ${props.title}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', props.content);
  }, [props]);

  return <></>;
};

export default Head;
