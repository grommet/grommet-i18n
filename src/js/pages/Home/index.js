import React from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import Card from './Card.js';

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto', 'auto'],
};

const rows = {
  small: ['auto', 'auto', 'auto', 'auto'],
  medium: ['auto', 'auto'],
  large: ['auto'],
  xlarge: ['auto'],
};

const fixedGridAreas = {
  small: [
    { name: 'card1', start: [0, 0], end: [0, 0] },
    { name: 'card2', start: [0, 1], end: [0, 1] },
    { name: 'card3', start: [0, 2], end: [0, 2] },
    { name: 'card4', start: [0, 3], end: [0, 3] },
  ],
  medium: [
    { name: 'card1', start: [0, 0], end: [0, 0] },
    { name: 'card2', start: [0, 1], end: [0, 1] },
    { name: 'card3', start: [1, 0], end: [1, 0] },
    { name: 'card4', start: [1, 1], end: [1, 1] },
  ],
  large: [
    { name: 'card1', start: [0, 0], end: [0, 0] },
    { name: 'card2', start: [1, 0], end: [1, 0] },
    { name: 'card3', start: [2, 0], end: [2, 0] },
    { name: 'card4', start: [3, 0], end: [3, 0] },
  ],
  xlarge: [
    { name: 'card1', start: [0, 0], end: [0, 0] },
    { name: 'card2', start: [1, 0], end: [1, 0] },
    { name: 'card3', start: [2, 0], end: [2, 0] },
    { name: 'card4', start: [3, 0], end: [3, 0] },
  ],
};

const cardTitles = ['Tutorial', 'Calendar', 'Select'];

const Home = () => {
  return (
    <Box align="center">
      <ResponsiveContext.Consumer>
        {size => {
          return (
            <Grid
              areas={fixedGridAreas[size]}
              rows={rows[size]}
              columns={columns[size]}
              gap="large"
            >
              {cardTitles.map((title, index) => (
                <Card title={title} key={index} />
              ))}
            </Grid>
          );
        }}
      </ResponsiveContext.Consumer>
    </Box>
  );
};

export default Home;
