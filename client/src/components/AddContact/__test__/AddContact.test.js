import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  getByTestId,
} from '@testing-library/react';
import AddContact from '../AddContact';
import { MemoryRouter } from 'react-router-dom';
import { contact, contacts } from '../../../../../test/jest/__mocks__/testData';

describe('Add Contact (Unit)', () => {
  afterEach(() => cleanup());

  const renderAddContact = () => render(<MemoryRouter><AddContact addContact={() => contacts} sameFirstLastNameCheck={() => false} onFormSubmit={() => contact} /></MemoryRouter>);
  const renderEmptyAddContact = () =>render(<MemoryRouter><AddContact canAddContact='false' /></MemoryRouter>);

  describe('render()', () => {
    const { asFragment, } = renderAddContact();
    
    it('should match snapshot', () => {
      expect(asFragment().firstChild).toMatchSnapshot();
    });  

    it('Should render all form fields', () => {
      renderAddContact();
      expect(screen.getByText('First Name')).toBeInTheDocument();
      expect(screen.getByText('Last Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Phone')).toBeInTheDocument();
    });
  });
  //help!
  describe('edge cases + undefined values', () => {

    // xit('should render an error message when given no input values', () => {
    //   renderAddContact();
    //   fireEvent.click(screen.getByText('Submit'));
    //   // console.log(screen.getByText('Submit'))
    //   // expect(screen.getByText("**Contacts must contain a first AND last name")).toBeInTheDocument();
    // });
  });
  

});
