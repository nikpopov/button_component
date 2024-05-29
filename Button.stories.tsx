import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Title, Description, Primary, Props,
} from '@storybook/addon-docs/blocks';
import { text } from '@storybook/addon-knobs';

import { Icon, icons } from '../Icon/Icon';
import { Button } from './Button';
import './Button.stories.scss';

storiesOf('Controls / Button', module)
  .add(
    'Button contained',
    () => (
      <div className="stories__button">
        <div className="bgDark">
          <div className="margin">
            <Button disabled variant="contained" invert size="medium" color="secondary">
              {text('Label_01', 'disabled')}
            </Button>
          </div>
          <div className="margin">
            <Button variant="contained" size="medium" color="secondary">
              {text('Label_02', 'enabled')}
            </Button>
          </div>
          <div className="margin">
            <Button
              variant="contained"
              disabled
              invert
              color="secondary"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_05', 'disabled with icon')}
            </Button>
          </div>
          <div className="margin">
            <Button color="secondary" variant="contained" startIcon={<Icon iconName={icons.add} />}>
              {text('Label_06', 'enabled with icon')}
            </Button>
          </div>
        </div>
        <div className="bg">
          <div className="margin">
            <Button disabled variant="contained" size="medium" color="secondary">
              {text('Label_01', 'disabled')}
            </Button>
          </div>
          <div className="margin">
            <Button variant="contained" size="medium" color="secondary">
              {text('Label_02', 'enabled')}
            </Button>
          </div>
          <div className="margin">
            <Button
              variant="contained"
              disabled
              color="secondary"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_05', 'disabled with icon')}
            </Button>
          </div>
          <div className="margin">
            <Button color="secondary" variant="contained" startIcon={<Icon iconName={icons.add} />}>
              {text('Label_06', 'enabled with icon')}
            </Button>
          </div>
        </div>
      </div>
    ),
    {
      docs: {
        page: () => (
          <>
            <Title>Button</Title>
            <Description>Button component</Description>
            <Primary name="Button" />
            <Props of={Button} />
          </>
        ),
      },
    },
  )
  .add(
    'Button outlined',
    () => (
      <div className="stories__button">
        <div className="bgDark">
          <div className="margin">
            <Button disabled variant="outlined" invert size="medium">
              {text('Label_03', 'disabled')}
            </Button>
          </div>
          <div className="margin">
            <Button variant="outlined" color="secondary" invert size="medium">
              {text('Label_04', 'enabled')}
            </Button>
          </div>
          <div className="margin">
            <Button
              variant="outlined"
              disabled
              invert
              color="secondary"
              size="medium"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_05', 'disabled with icon')}
            </Button>
          </div>
          <div className="margin">
            <Button
              invert
              color="secondary"
              variant="outlined"
              size="medium"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_06', 'enabled with icon')}
            </Button>
          </div>
        </div>
        <div className="bg">
          <div className="margin">
            <Button disabled variant="outlined" color="secondary" size="medium">
              {text('Label_03', 'disabled')}
            </Button>
          </div>
          <div className="margin">
            <Button variant="outlined" color="secondary" size="medium">
              {text('Label_04', 'enabled')}
            </Button>
          </div>
          <div className="margin">
            <Button
              variant="outlined"
              disabled
              color="secondary"
              size="medium"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_05', 'disabled with icon')}
            </Button>
          </div>
          <div className="margin">
            <Button
              color="secondary"
              variant="outlined"
              size="medium"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_06', 'enabled with icon')}
            </Button>
          </div>
        </div>
      </div>
    ),
    {
      docs: {
        page: () => (
          <>
            <Title>Button</Title>
            <Description>Button component</Description>
            <Primary name="Button" />
            <Props of={Button} />
          </>
        ),
      },
    },
  )
  .add(
    'Button text',
    () => (
      <div className="stories__button">
        <div className="bgDark">
          <div className="margin">
            <Button disabled invert color="secondary" size="medium">
              {text('Label_03', 'disabled')}
            </Button>
          </div>
          <div className="margin">
            <Button invert color="secondary" size="medium">
              {text('Label_04', 'enabled')}
            </Button>
          </div>
          <div className="margin">
            <Button
              invert
              disabled
              size="medium"
              color="secondary"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_05', 'disabled with icon')}
            </Button>
          </div>
          <div className="margin">
            <Button
              invert
              size="medium"
              color="secondary"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_06', 'enabled with icon')}
            </Button>
          </div>
        </div>

        <div className="bg">
          <div className="margin">
            <Button disabled color="secondary" size="medium">
              {text('Label_03', 'disabled')}
            </Button>
          </div>
          <div className="margin">
            <Button color="secondary" size="medium">
              {text('Label_04', 'enabled')}
            </Button>
          </div>
          <div className="margin">
            <Button
              disabled
              size="medium"
              color="secondary"
              startIcon={<Icon iconName={icons.add} />}
            >
              {text('Label_05', 'disabled with icon')}
            </Button>
          </div>
          <div className="margin">
            <Button size="medium" color="secondary" startIcon={<Icon iconName={icons.add} />}>
              {text('Label_06', 'enabled with icon')}
            </Button>
          </div>
        </div>
      </div>
    ),
    {
      docs: {
        page: () => (
          <>
            <Title>Button</Title>
            <Description>Button component</Description>
            <Primary name="Button" />
            <Props of={Button} />
          </>
        ),
      },
    },
  )
  .add(
    'Button Icon',
    () => (
      <div className="stories__button">
        <div className="bgDark">
          <div className="margin">
            <Button withIcon invert disabled color="secondary" size="medium">
              <Icon iconName={icons.favorite} />
            </Button>
          </div>
          <div className="margin">
            <Button withIcon invert color="secondary" size="medium">
              <Icon iconName={icons.favorite} />
            </Button>
          </div>
        </div>
        <div className="bg">
          <div className="margin">
            <Button withIcon disabled color="secondary" size="medium">
              <Icon iconName={icons.favorite} />
            </Button>
          </div>
          <div className="margin">
            <Button withIcon color="secondary" size="medium">
              <Icon iconName={icons.favorite} />
            </Button>
          </div>
        </div>
      </div>
    ),
    {
      docs: {
        page: () => (
          <>
            <Title>Button</Title>
            <Description>Button component</Description>
            <Primary name="Button" />
            <Props of={Button} />
          </>
        ),
      },
    },
  )
  .add(
    'Button FAB',
    () => (
      <div className="stories__button">
        <div className="bgDark">
          <div className="margin">
            <Button fab disabled color="secondary" size="medium">
              <Icon iconName={icons.favorite} />
            </Button>
          </div>
          <div className="margin">
            <Button fab color="secondary" size="medium">
              <Icon iconName={icons.favorite} />
            </Button>
          </div>
        </div>
        <div className="bg">
          <div className="margin">
            <Button fab disabled color="secondary" size="medium">
              <Icon iconName={icons.favorite} />
            </Button>
          </div>
          <div className="margin">
            <Button fab color="secondary" size="medium">
              <Icon iconName={icons.favorite} />
            </Button>
          </div>
        </div>
      </div>
    ),
    {
      docs: {
        page: () => (
          <>
            <Title>Button</Title>
            <Description>Button component</Description>
            <Primary name="Button" />
            <Props of={Button} />
          </>
        ),
      },
    },
  );
