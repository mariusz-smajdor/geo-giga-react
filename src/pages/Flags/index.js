import Container from '../../components/layout/Container';
import { useCountries } from '../../hooks/useCountries';
import { Input } from '../../components/UI/Input/styled';
import { Button } from '../../components/UI/Button/styled';
import { Country, Flag, Form, HelpButtons } from './styled';

function Flags() {
  const { data } = useCountries();

  console.log(data);

  return (
    <Container>
      {data.status === 'success' && (
        <Country>
          <Flag src={data.drawnCountry.flag} alt={`Flag`} />
          <Form>
            <Input invertedColors placeholder='Country name' />
            <Button invertedColors>Guess!</Button>
          </Form>
          <HelpButtons>
            <Button>Hint</Button>
            <Button>Skip</Button>
          </HelpButtons>
        </Country>
      )}
    </Container>
  );
}

export default Flags;
