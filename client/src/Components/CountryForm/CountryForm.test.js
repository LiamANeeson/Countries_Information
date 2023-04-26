import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CountryForm from '../CountryForm/CountryForm';

describe('CountryForm', () => {
  test('renders input field and submit button', () => {
    const onSubmit = jest.fn();
    const onChange = jest.fn();
    const value = 'Ireland';

    const { getByPlaceholderText, getByRole } = render(
      <CountryForm onSubmit={onSubmit} onChange={onChange} value={value} />
    );

    const inputField = getByPlaceholderText('Enter a Country');
    expect(inputField).toBeInTheDocument();
    expect(inputField.value).toBe('Ireland');

    const submitButton = getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalled();
  });
});
