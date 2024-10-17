import { css } from '@emotion/react';
import BestItem from '../components/BestItem';
import Container from '../components/Container';

function HomePage() {
  return (
    <Container>
      <BestItem css={container} />
    </Container>
  );
}

const container = css`
  margin-top: 2.4rem;
`;

export default HomePage;
