import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import Details from '../Details';
import { MemoryRouter } from 'react-router-dom';
import { contact, contacts } from '../../../../../test/jest/__mocks__/testData';

describe('Details (Unit)', () => {
  afterEach(() => cleanup());
  const renderDetails = () => render(<MemoryRouter initialEntries={['/details']}><Details emptyName={true} people={contacts} contactToEdit={contact} deleteContact={()=>people.pop()} sortPeople={()=>people} sortType={'first'} sameFirstLastNameCheck={false} /></MemoryRouter>)
  const renderEmptyDetails = () => render(<MemoryRouter><Details emptyName={true} /></MemoryRouter>)

  describe('render()', () => {
    const { asFragment, container, } = renderDetails();

    it('render should match snapshot', () => {
        renderDetails()
      expect(asFragment().firstChild).toMatchSnapshot();
    });
    it('should render h1', () => {
      renderDetails()
      expect(screen.getByRole('heading',{name:'Contact Details'})).toBeInTheDocument();
    });
    it('Should not render a warning message ', () => {
      renderDetails()
      const nofirstOrLastName = screen.queryByText('**Contacts must contain a first AND last name')
      expect(nofirstOrLastName).not.toBeInTheDocument()
    });
    
  });

//   describe('User Table edge cases + undefined values', () => {
//     it('should render an error message when given no input values', () => {
//       renderDetails()
//       expect(screen.getByText("**Contacts must contain a first AND last name")).toBeInTheDocument();
//     });
//   });
});
