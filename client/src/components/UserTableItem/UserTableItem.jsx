import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Image,
  Container,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';

const UserTableItem = ({ people, setContactToEdit, searchInput }) => {
  const history = useHistory();
  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Select contact to show details
    </Tooltip>
  );
  const filteredUsers = (userInput) => {
    if (!people) return;
    const lowerCaseUserinput = userInput.toLowerCase();
    let filteredResults = people.filter((person) => {
      return (
        person.name.first.toLowerCase().includes(lowerCaseUserinput) ||
        person.name.last.toLowerCase().includes(lowerCaseUserinput)
      );
    });
    return filteredResults;
  };
  let filteredPeople = filteredUsers(searchInput);
  return (
    <Fragment>
      {people &&
        filteredPeople.map((user) => {
          return (
            <Container key={user.login.uuid} className='p-3'>
              <Row
                onClick={(e) => {
                  setContactToEdit(user);
                  history.push('/details');
                }}
              >
                <Col md={3}></Col>
                <Col md={5}>
                  <div className='ms-2 me-auto'>
                    <div className='fw-bold'>
                      <OverlayTrigger
                        placement='right'
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <Link
                          to='/details'
                          style={{
                            color: 'inherit',
                            textDecoration: 'inherit',
                            paddingRight: '20px',
                          }}
                        >
                          {' '}
                          {user.name.first} {user.name.last}{' '}
                        </Link>
                      </OverlayTrigger>
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <Image
                    height='48px'
                    width='48px'
                    src={
                      user.picture.thumbnail || '../../../../assets/noimage.jpg'
                    }
                    alt='user_picture'
                    roundedCircle
                  />
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default UserTableItem;
