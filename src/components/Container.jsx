import { css } from '@emotion/react';

function Container({ css, children }) {
  return <div css={[container, css]}>{children}</div>;
}

const container = css`
  width: 100%;
  margin: 0 auto;
`;

export default Container;
