import Container from '../../components/layout/Container';
import { Wrapper, Title, Text, StyledLink } from './styled';

function Home() {
  return (
    <Container>
      <Wrapper>
        <Title>Welcome to the Geo Giga!</Title>
        <Text>
          You can choose between our various games such as{' '}
          <StyledLink to='flags'>Flags Game</StyledLink>,{' '}
          <StyledLink to='street-view'>Street View Game</StyledLink> and{' '}
          <StyledLink to='/'>Lands Game</StyledLink>
        </Text>
      </Wrapper>
    </Container>
  );
}

export default Home;
