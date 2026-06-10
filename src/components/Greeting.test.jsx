import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  it('renders the correct heading', () => {
    render(<Greeting />);
    const headingElement = screen.getByText(/Hello, DevOps World!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
