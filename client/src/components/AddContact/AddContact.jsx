import React, { Fragment, useState } from 'react';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddContact = ({ addContact, sameFirstLastNameCheck }) => {
  const [canAddContact, setCanAddContact] = useState(null);
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {};
    newContact.login = { uuid: uuidv4() };
    newContact.name = { first: e.target[0].value, last: e.target[1].value };
    newContact.email = e.target[2].value;
    newContact.phone = e.target[3].value;
    newContact.picture = { thumbNail: '../../../../assets/noimage.jpg' };
    console.log(newContact);
    // if first or last name is left blank
    if (newContact.name.first.length < 1 || newContact.name.last.length < 1) {
      console.log('New contacts must have a first AND last name!');
      setCanAddContact(false);
      return;
    } // check that the first and last name are unique
    if (sameFirstLastNameCheck(newContact)) {
      let sameUserConfirmation = window.confirm(
        'A contact with this name already exists. Are you sure you want to continue?'
      );
      if (!sameUserConfirmation) {
        return;
      } else {
        addContact(newContact);
        setCanAddContact(true);
        history.push('/');
      }
    } else {
      addContact(newContact);
      setCanAddContact(true);
      history.push('/');
    }
  };
  const goBack = () => {
    history.push('/');
  };

  return (
    <div title='Click to show details'>
      <h1>Add a new Contact</h1>
      <Container className='p-3'>
        <div style={{ paddingBottom: '60px' }}>
          <Button variant='secondary' onClick={goBack}>
            back
          </Button>
        </div>
        <Fragment>
          <Form onSubmit={onFormSubmit}>
            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formPlaintextEmail'
            >
              <Form.Label column sm='2'>
                First Name
              </Form.Label>
              <Col sm='10'>
                <Form.Control placeholder='First Name' type='text' />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formPlaintextEmail'
            >
              <Form.Label column sm='2'>
                Last Name
              </Form.Label>
              <Col sm='10'>
                <Form.Control placeholder='Last Name' type='input' />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formPlaintextEmail'
            >
              <Form.Label column sm='2'>
                Email
              </Form.Label>
              <Col sm='10'>
                <Form.Control placeholder='youremail@email.com' type='email' />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formPlaintextEmail'
            >
              <Form.Label column sm='2'>
                Phone
              </Form.Label>
              <Col sm='10'>
                <Form.Control placeholder='1234567899' type='input' />
              </Col>
            </Form.Group>
            <div style={{ padding: '10px', textAlign: 'center' }}>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
          {canAddContact === false ? (
            <h5 style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
              **Contacts must contain a first AND last name
            </h5>
          ) : null}
        </Fragment>
      </Container>
    </div>
  );
};

export default AddContact;
