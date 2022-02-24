// react stuff
import React, { useState } from 'react';
// reactstrap
import { Container, Button, ButtonGroup, Row, Col, Card, CardHeader, CardFooter, CardBody, Input } from 'reactstrap'
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
  const [guess, setGuess] = useState('')

  function generateCaesarCipher() {


    console.log('key = ', key);
    const keymod = key % 26;
    console.log('keymod = ', keymod);
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
    return ciphertext.join('')
  }
  function getAnswer() {

    if (key < 0 || key % 1 !== 0) {

      return toast.error('Key must be a natural number', {
        autoClose: 2500
      });
    }
    const answer = generateCaesarCipher()
    setCipher(answer)
  }
  function checkGuess() {
    const answer = generateCaesarCipher()
    if (answer === guess)
      toast.success('Correct Guess 🙂')
    else {
      toast.error('Wrong Guess 🥲')
    }

  }
  return (

    <Container fluid className='bg-dark App' >
      <ToastContainer />

      <h1 className='text-white text-center p-2 mb-5'>Caesar-Cipher Calculation</h1>

      {/* The first Row */}
      <Row xs='1'>
        <Col md={5} className='offset-md-3'>
          <div className='grid'>

            <Card className=' bg-yellow '>
              <CardHeader className='text-center'><h3>Plaintext:</h3></CardHeader>
              <CardBody className='box'>

                <Input className='' id='value' type='text' placeholder='enter your value' onInput={(e) => setValue(e.target.value)} />
              </CardBody>
              <CardFooter className='text-muted'>Enter text here to get its Cipher</CardFooter>
            </Card>

            <Card className=' bg-yellow '>
              <CardHeader className='text-center '> <h3>Key :</h3> </CardHeader>
              <CardBody className='box'>

                <Input className='' id='key' type='number' placeholder='enter a natural number' onInput={(e) => setKey(e.target.value)} />
              </CardBody>
              <CardFooter className='text-muted'>Enter a Natural number</CardFooter>
            </Card>

          </div>
        </Col>
      </Row>

      {/* THe Second Row */}
      <Row xs={1} className='mt-5'>
        <Col md={5} className='offset-md-3'>
          <div className='grid'>

            <Card className=' bg-green '  >
              <CardHeader className='text-center'> <h3>Caesar Cipher :  </h3></CardHeader>
              <CardBody className='box'>

                <Input className='m-1 form-control-plaintext' id='key' type='text' readOnly value={cipher} />
              </CardBody>
              <CardFooter className='text-muted'>Correct Answer</CardFooter>
            </Card>

            <Card className='bg-red'>
              <CardHeader className='text-center'><h3>Guess Answer </h3></CardHeader>
              <CardBody className='box'>
                <Input className='' onInput={(e) => setGuess(e.target.value)} ></Input>
              </CardBody>
              <CardFooter className='text-muted'>Guess the cipher</CardFooter>
            </Card>

          </div>
        </Col>
      </Row>

      {/* The Button Group */}
      <ButtonGroup className='p-3 offset-md-4'>
        <Button className='m-2 bg-green' onClick={getAnswer}>Get Answer</Button>
        <Button className='m-2 bg-red ' onClick={checkGuess}>Check my guess</Button>
      </ButtonGroup>
    </Container>
  );
}

export default App;
