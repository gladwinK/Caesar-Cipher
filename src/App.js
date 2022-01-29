// react stuff
import Reactm, { useState } from 'react';
// reactstrap
import { Container, Button, ButtonGroup, Row, Col, Card, CardColumns,CardDeck, CardBody, CardText, CardTitle, Input, CardGroup } from 'reactstrap'
// toast
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [value, setValue] = useState('');
  const [key, setKey] = useState(0);
  const [cipher, setCipher] = useState('')

  function generateCaesarCipher() {
    if (key < 0) {
      setCipher(value);
      return;
    }
    const keymod = key % 26;
    let ciphertext = [...value];

    for (var i = 0; i < ciphertext.length; i++) {
      let ch = ciphertext[i].charCodeAt(0);
      if (ch >= 97 && ch <= 122) {
        ciphertext[i] = String.fromCodePoint((ch - 97 + keymod) % 26 + 97);
      }
      else if (ch >= 65 && ch <= 90) {
        ciphertext[i] = String.fromCodePoint((ch - 65 + keymod) % 26 + 65);
      }
      else {
        ciphertext[i] = String.fromCodePoint(ch);
      }

    }
    setCipher(ciphertext.join(''))
  }
  return (

    <Container fluid>
      <ToastContainer />
      <h1>Caesar-Cipher Calculation</h1>
      <CardGroup>

        {/* <CardColumns> */}
        <CardDeck>
          <Card>
            <CardTitle className='text-center'>Enter your Value:</CardTitle>
            <Input id='value' type='text' placeholder='enter your value' onInput={(e) => setValue(e.target.value)} />
          </Card>

          <Card>
            <CardTitle className='text-center'>Enter key : </CardTitle>
            <Input id='key' type='number' placeholder='enter a natural number' onInput={(e) => setKey(e.target.value)} />
          </Card>

          <Card>
            <CardTitle>Caesar Cipher : </CardTitle>
            <CardText> {cipher} </CardText>
          </Card>
        </CardDeck>
        {/* </CardColumns> */}
      </CardGroup>

      <ButtonGroup className='p-3'>
        <Button className='m-2' color='danger' onClick={() => generateCaesarCipher()}>Get Answer</Button>
        <Button className='m-2' color='success' >Evaluate</Button>
      </ButtonGroup>
    </Container>
  );
}

export default App;
