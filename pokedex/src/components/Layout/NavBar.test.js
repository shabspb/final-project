import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './../../App';

test('renders navbar text logo and links', () => {
  render(<App />);
  const textLogo = screen.getByText(/Pokédex/i);
  const linkAll = screen.getByText(/All pokémon/i);
  const linkCaught = screen.getByText(/Caught pokémon/i);
  expect(textLogo).toBeInTheDocument();
  expect(linkAll).toBeInTheDocument();
  expect(linkCaught).toBeInTheDocument();
});