import React from "react";
import { render, screen } from "@testing-library/react";
import UserTableItem from "../UserTableItem";
import { MemoryRouter } from "react-router-dom"
import { contact, contacts } from "../../../../../test/jest/__mocks__/testData"


describe('User Table Item (Unit)', () => {
    const renderUserTableItem = () => render(<MemoryRouter><UserTableItem people={contacts} setContactToEdit={contact} searchInput="" /></MemoryRouter>)
    const renderEmptyUserTableItem = () => render(<MemoryRouter><UserTableItem /></MemoryRouter>)

    describe('render()', () => {
        const { asFragment } = renderUserTableItem();
        test('should match snapshot', () => {
            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe('User Table edge cases + undefined values', () => {
        test('should render an error message when given no input values', () => {
            renderEmptyUserTableItem()
            expect(screen.getByText("no users found!")).toBeInTheDocument();
        });
    });
});