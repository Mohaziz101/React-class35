import { fireEvent, render, screen } from '@testing-library/react';

import UserDetailsForm from './2-UserDetailsForm';

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: 'John',
  lastName: 'Doe',
  role: 'Admin',
};
const changedUser = {
  firstName: 'Mary',
  lastName: 'Williams',
  role: 'User',
};

describe('UserDetailsForm', () => {
  it('Correctly fills in the initial values', () => {
    render(<UserDetailsForm initialUserValues={testUser} />);

    expect(screen.getByLabelText('First name:').value).toBe('John');
    expect(screen.getByLabelText('Last name:').value).toBe('Doe');
    expect(screen.getByLabelText('Role:').value).toBe('Admin');
  });

  it('Correctly changes a fields value', () => {
    render(<UserDetailsForm initialUserValues={testUser} />);

    const inputFirstName = screen.getByLabelText('First name:');
    fireEvent.change(inputFirstName, {
      target: { value: `${changedUser.firstName}` },
    });
    expect(inputFirstName.value).toBe(`${changedUser.firstName}`);

    const inputLastName = screen.getByLabelText('Last name:');
    fireEvent.change(inputLastName, {
      target: { value: `${changedUser.lastName}` },
    });
    expect(inputLastName.value).toBe('Williams');

    const inputRole = screen.getByLabelText('Role:');
    fireEvent.change(inputRole, {
      target: { value: `${changedUser.role}` },
    });
    expect(inputRole.value).toBe('User');
  });

  it('Submits the right values to the onSubmit function', () => {
    // TIP: You will need to mock the onSubmit function prop so you can check that it was called and what it was called with! Have a look at `jest.fn`
    const testFunction = jest.fn(({ firstName, lastName, role }) => {});

    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={testFunction} />,
    );

    const submitButton = screen.getByRole('button');

    expect(testFunction).not.toHaveBeenCalled();

    fireEvent.click(submitButton);

    expect(testFunction).toHaveBeenCalled();
  });
});