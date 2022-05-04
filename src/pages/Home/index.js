import { useState } from 'react';

import Container from '../../components/layout/Container';
import { Input } from '../../components/UI/Input/styled';
import { Button } from '../../components/UI/Button/styled';
import { Form, Title, Key } from './styled';

function Home() {
  const [googleKey, setGoogleKey] = useState(
    localStorage.getItem('googleKey') || ''
  );

  function onFormSubmit(e) {
    e.preventDefault();

    localStorage.setItem('googleKey', googleKey);
  }

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <Title>
          Enter your Google API key in order to play the Street View
          game
        </Title>
        <Key>
          <Input
            type='password'
            value={googleKey}
            onChange={({ target }) => setGoogleKey(target.value)}
          />
          <Button>Set the key</Button>
        </Key>
      </Form>
    </Container>
  );
}

export default Home;
