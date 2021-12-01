import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Navigation from '../Navigation';
import { MemoryRouter } from 'react-router-dom';
import { contact, contacts } from '../../../../../test/jest/__mocks__/testData';

describe('Navigation (Unit)', () => {
  afterEach(() => cleanup());
  const renderNavigation = () => render(<MemoryRouter initialEntries={['/']}><Navigation /></MemoryRouter>)
  const renderEmptyNavigation = () => render(<MemoryRouter><Navigation /></MemoryRouter>)

  describe('render Navigation()', () => {
    const { asFragment } = renderNavigation();

    it('Navigation render should match snapshot', () => {
      renderNavigation();
      expect(asFragment()).toMatchSnapshot();
    });
    it('All links should render to the Nav', () => {
      renderNavigation();
      expect(screen.getByText('Address Book')).toBeInTheDocument();
      expect(screen.getByText('Add New Contact')).toBeInTheDocument();
    });
  });

  //   describe('User Table edge cases + undefined values', () => {
  //     it('should render an error message when given no input values', () => {
  //       renderDetails()
  //       expect(screen.getByText("**Contacts must contain a first AND last name")).toBeInTheDocument();
  //     });
  //   });
});
