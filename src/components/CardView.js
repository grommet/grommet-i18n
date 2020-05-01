import React from 'react';
import { Box, Grid, ResponsiveContext, Paragraph } from 'grommet';
import Card from './Card.js';

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto'],
};

const rows = {
  small: ['auto', 'auto', 'auto'],
  medium: ['auto', 'auto'],
  large: ['auto'],
  xlarge: ['auto'],
};

const fixedGridAreas = {
  small: [
    { name: 'card1', start: [0, 0], end: [0, 0] },
    { name: 'card2', start: [0, 1], end: [0, 1] },
    { name: 'card3', start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: 'card1', start: [0, 0], end: [0, 0] },
    { name: 'card2', start: [0, 1], end: [0, 1] },
    { name: 'card3', start: [1, 0], end: [1, 0] },
  ],
  large: [
    { name: 'card1', start: [0, 0], end: [0, 0] },
    { name: 'card2', start: [1, 0], end: [1, 0] },
    { name: 'card3', start: [2, 0], end: [2, 0] },
  ],
  xlarge: [
    { name: 'card1', start: [0, 0], end: [0, 0] },
    { name: 'card2', start: [1, 0], end: [1, 0] },
    { name: 'card3', start: [2, 0], end: [2, 0] },
  ],
};

const HomeI18next = (props) => {
  return (
    <Box align="center" gap="large">
      <Paragraph size="xlarge">{props.msg}</Paragraph>
      <Box>
        <ResponsiveContext.Consumer>
          {(size) => {
            return (
              <Grid
                areas={fixedGridAreas[size]}
                rows={rows[size]}
                columns={columns[size]}
                gap="large"
              >
                {props.cards.map((title, index) => (
                  <Card title={title} key={index} />
                ))}
              </Grid>
            );
          }}
        </ResponsiveContext.Consumer>
      </Box>
    </Box>
  );
};

export default HomeI18next;
