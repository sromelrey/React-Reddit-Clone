import React from 'react';
import { Grid, IconButton, Avatar } from '@mui/material';
import _ from 'lodash';
import { Typography } from '@material-ui/core';

const Awards = (props) => {
  const { awards } = props;
  return (
    <Grid container direction="row" style={{ maxHeight: 20 }}>
      {!_.isEmpty(awards) &&
        awards.map((award, index) => (
          <Grid container item xs={2} key={index}>
            <Grid item xs={1}>
              <IconButton size="small">
                <Avatar src={award.static_icon_url} style={{ maxHeight: 16, width: 16 }} />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{award.count}</Typography>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};
export default Awards;
