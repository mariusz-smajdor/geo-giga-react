import Container from '../../components/layout/Container';
import { regions } from '../../regions';
import { Wrapper, Title, Games, StyledLink } from './styled';

function Regions() {
  return (
    <Container>
      <Wrapper>
        <Title>Choose Region</Title>
        <Games>
          {regions.map(region => (
            <StyledLink key={region.id} to={`${region.id}`}>
              {region.name}
            </StyledLink>
          ))}
        </Games>
      </Wrapper>
    </Container>
  );
}

export default Regions;
