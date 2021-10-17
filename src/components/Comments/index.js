import React, { memo, useState } from 'react';
import { Grid, Typography, CardContent, Card, IconButton, Avatar, Divider, Stack } from '@mui/material';
import _ from 'lodash';
import {
  ArrowUpwardOutlined as ArrowUpwardOutlinedIcon,
  ArrowDownwardOutlined as ArrowDownwardOutlinedIcon,
  OpenInFull as OpenInFullIcon,
} from '@mui/icons-material';
import { SubComments } from './components/SubComments';
import moment from 'moment';

export const Comments = memo((props) => {
  const { comments } = props;

  const [collapseIndex, setCollapseIndex] = useState([]);

  const fortmatedUps = (ups) => {
    const ups_formated = ups?.toString()?.length > 3 ? ups?.toString() : ups;
    if (ups.toString().length > 3) {
    }
    return ups_formated;
  };

  const onCollapseIndexHandler = (event, index) => {
    setCollapseIndex(collapseIndex.concat(index));
  };

  const validatedCollapsedIndex = (index) => {
    if (collapseIndex.findIndex((data) => data === index) !== -1) return true;
    else return false;
  };

  const onExpandReplyHandler = (event, index) => {
    const collapse_index = collapseIndex.findIndex((data) => data === index);
    if (collapse_index !== -1) {
      const collapse = [...collapseIndex];
      collapse.splice(collapse_index, 1);
      setCollapseIndex(collapse);
    }
  };

  return (
    <Grid container direction="column">
      <Card sx={{ width: 750, minHeight: 128, height: 'calc(100%)', maxHeight: '100%', marginBottom: 5 }}>
        {!_.isEmpty(comments) &&
          comments.map((comment, index) => (
            <Grid container key={index}>
              {validatedCollapsedIndex(index) ? (
                <Grid container item xs={12} style={{ padding: 5 }}>
                  <IconButton
                    size="large"
                    style={{ borderRadius: 0, maxHeight: 16, width: 16 }}
                    onClick={(event) => onExpandReplyHandler(event, index)}
                  >
                    <OpenInFullIcon style={{ maxHeight: 16, width: 16 }} />
                  </IconButton>
                  <IconButton size="small">
                    <Avatar style={{ maxHeight: 20, width: 20 }} />
                  </IconButton>
                  <Grid item xs={4}>
                    <Typography variant="body2">{comment.author_name}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body1">{` ${moment(comment.created).format('HH')} hours`}</Typography>
                  </Grid>
                </Grid>
              ) : (
                <CardContent key={index} sx={{ maxHeight: '100%' }}>
                  <Grid container direction="row" sx={{ maxHeight: '100%' }}>
                    <Grid container item xs={12} direction="row">
                      <Grid container item xs={1} justifyContent="center">
                        <IconButton size="small">
                          <Avatar style={{ maxHeight: 30, width: 30 }} />
                        </IconButton>
                      </Grid>
                      <Grid container item xs={11} alignItems="center">
                        <Typography sx={{ fontSize: 14 }}>{comment?.author_name}</Typography>

                        <Typography variant="body1" style={{ marginLeft: 5 }} sx={{ fontSize: 14 }}>{` ${moment(comment.created).format(
                          'HH',
                        )} hours`}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} direction="row">
                      <Grid item xs={1}>
                        <Stack direction="column" justifyContent="space-evenly" alignItems="center" style={{ height: 'calc(100%)' }}>
                          <IconButton
                            onClick={(event) => onCollapseIndexHandler(event, index)}
                            style={{ height: 'inherit', maxHeight: '100%', borderRadius: 0, alignItems: 'center', maxWidth: 2 }}
                          >
                            <Divider orientation="vertical" style={{ height: 'calc(100%)', minHeight: 50, maxHeight: '100%', width: 2 }} />
                          </IconButton>
                        </Stack>
                      </Grid>
                      <Grid item xs={11}>
                        <Grid container item xs={12}>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {comment?.body}
                          </Typography>
                        </Grid>
                        <Grid container item xs={12} direction="row" justifyContent="flex-start" alignItems="center">
                          <IconButton size="large">
                            <ArrowUpwardOutlinedIcon style={{ maxHeight: 16, width: 16 }} />
                          </IconButton>
                          <Typography variant="body2">{fortmatedUps(comment?.ups)}</Typography>
                          <IconButton size="large">
                            <ArrowDownwardOutlinedIcon style={{ maxHeight: 16, width: 16 }} />
                          </IconButton>
                        </Grid>
                        <Grid container item xs={12} direction="row" justifyContent="flex-start" alignItems="center">
                          {!_.isEmpty(comment.replies) && <SubComments replies={comment.replies} />}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              )}
            </Grid>
          ))}
      </Card>
    </Grid>
  );
});
