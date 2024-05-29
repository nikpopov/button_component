import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Icon, icons } from '../Icon/Icon';
import { Button } from './Button';

describe('Button test', () => {
  afterEach(cleanup);

  test('render Button component', async () => {
    const { asFragment, getByText, getByRole } = render(<Button>Only Button</Button>);
    expect(getByRole('button')).toBeDefined();
    expect(getByRole('button')).toHaveClass('button');
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('Only Button')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('render Button with Icon', async () => {
    const { asFragment, getByRole } = render(
      <Button withIcon>
        <Icon iconName={icons.favorite} />
      </Button>,
    );
    expect(getByRole('button')).toBeDefined();
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('icon');
    expect(getByRole('button').getElementsByClassName('ic_favorite')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  test('render Button with prop fab', async () => {
    const { asFragment, getByRole, getByText } = render(
      <Button fab color="secondary" size="medium">
        test 1
      </Button>,
    );
    expect(getByRole('button')).toBeDefined();
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('icon-fab');
    expect(getByText('test 1')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('render Button with prop invert', async () => {
    const { asFragment, getByRole, getByText } = render(
      <Button variant="outlined" color="secondary" invert size="medium">
        test 2
      </Button>,
    );
    expect(getByRole('button')).toBeDefined();
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('button-invert');
    expect(getByText('test 2')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('render Button with prop invert and fab', async () => {
    const { asFragment, getByRole, getByText } = render(
      <Button variant="outlined" color="secondary" invert fab size="medium">
        test 3
      </Button>,
    );
    expect(getByRole('button')).toBeDefined();
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('icon-invert');
    expect(getByText('test 3')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('render Button with Icon and prop invert', async () => {
    const { asFragment, getByRole, getByText } = render(
      <Button withIcon invert startIcon={<Icon iconName={icons.arrowUp} />}>
        test 4
      </Button>,
    );
    expect(getByRole('button')).toBeDefined();
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('icon-invert');
    expect(getByText('test 4')).toBeInTheDocument();
    expect(getByRole('button').getElementsByClassName('icon-arrow-up')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
