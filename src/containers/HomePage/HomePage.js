import React, { memo, useEffect, useState } from 'react';
import { Grid, Typography, Paper, Button, Skeleton, Card } from '@mui/material';
import {
  LocalFireDepartment as LocalFireDepartmentIcon,
  Brightness5 as Brightness5Icon,
  VerticalAlignTop as VerticalAlignTopIcon,
  AirplanemodeActiveRounded as AirplanemodeActiveRoundedIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { AddNotificationPageStyle } from './Styles';
import { Contents } from 'components/Contents';
import clsx from 'clsx';

import _ from 'lodash';

const HomePage = memo((props) => {
  const { getHot, getBest, getNew, getTop } = props;
  const {
    hot_formated,
    best_formated,
    new_post_formated,
    top_formated,
    isFetchingHotPosts,
    isFetchingBestPosts,
    isFetchingNewPosts,
    isFetchingTopPosts,
  } = useSelector(({ HomePageReducer }) => HomePageReducer);
  const classes = AddNotificationPageStyle();
  const dispatch = useDispatch();
  const [isHotPostSelected, setIsHotPostSelected] = useState(false);

  const [isBestPostSelected, setIsBestPostSelected] = useState(false);
  const [isNewPostSelected, setIsNewPostSelected] = useState(false);

  const [isTopPostSelected, setIsTopPostSelected] = useState(false);

  useEffect(() => {
    getHot('OnePiece');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNavigateToContentHandler = (event, permalink) => {
    if (event.currentTarget !== event.target) return;
    // event.stopPropagation();
    const permalink_indexOf = permalink.indexOf('comments');
    const permalink_route = permalink.substr(permalink_indexOf);

    dispatch(push(`/${permalink_route}`));
    // history.push(`/${permalink_route}`);
  };

  const onBestPostSelectedHandler = () => {
    if (_.isEmpty(best_formated)) getBest('OnePiece');
    setIsBestPostSelected(true);
    setIsHotPostSelected(false);
    setIsTopPostSelected(false);
    setIsNewPostSelected(false);
  };
  const onHotPostSelectedHandler = () => {
    if (_.isEmpty(hot_formated)) getHot('OnePiece');
    setIsHotPostSelected(true);
    setIsBestPostSelected(false);

    setIsTopPostSelected(false);
    setIsNewPostSelected(false);
  };
  const onNewPostSelectedHandler = () => {
    if (_.isEmpty(new_post_formated)) getNew('OnePiece');
    setIsNewPostSelected(true);
    setIsHotPostSelected(false);
    setIsBestPostSelected(false);

    setIsTopPostSelected(false);
  };
  const onTopPostSelectedHandler = () => {
    if (_.isEmpty(top_formated)) getTop('OnePiece');
    setIsTopPostSelected(true);
    setIsHotPostSelected(false);
    setIsBestPostSelected(false);

    setIsNewPostSelected(false);
  };

  return (
    <Grid container direction="column">
      <Paper className={classes.paper}>
        <Grid
          container
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
            justifyContent: 'space-between',
          }}
        >
          <Grid item alignItems="center" xs={6} style={{ position: 'relative', display: 'flex' }}>
            <Grid item xs={3} style={{ margin: 5 }}>
              <Button
                color="inherit"
                className={clsx(isBestPostSelected && classes.buttonListSelected)}
                style={{ borderRadius: 20 }}
                onClick={onBestPostSelectedHandler}
              >
                <Grid item xs={4}>
                  <AirplanemodeActiveRoundedIcon size="lg" />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">Best</Typography>
                </Grid>
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                className={clsx(isHotPostSelected && classes.buttonListSelected)}
                onClick={onHotPostSelectedHandler}
                color="inherit"
                style={{ height: 35, borderRadius: 15, padding: 5 }}
              >
                <Grid item xs={4}>
                  <LocalFireDepartmentIcon size="lg" />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">Hot</Typography>
                </Grid>
              </Button>
            </Grid>
            <Grid item xs={3} style={{ margin: 5 }}>
              <Button
                className={clsx(isNewPostSelected && classes.buttonListSelected)}
                onClick={onNewPostSelectedHandler}
                color="inherit"
                style={{ height: 35, borderRadius: 15, padding: 5 }}
              >
                <Grid item xs={4}>
                  <Brightness5Icon size="lg" />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">New</Typography>
                </Grid>
              </Button>
            </Grid>
            <Grid item xs={3} style={{ margin: 5 }}>
              <Button
                className={clsx(isTopPostSelected && classes.buttonListSelected)}
                onClick={onTopPostSelectedHandler}
                color="inherit"
                style={{ height: 35, borderRadius: 15, padding: 5 }}
              >
                <Grid item xs={4}>
                  <VerticalAlignTopIcon size="lg" />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">Top</Typography>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {!_.isEmpty(best_formated) &&
        isBestPostSelected &&
        best_formated.map((content, index) => <Contents key={index} onNavigateToContent={onNavigateToContentHandler} {...content} />)}
      {!_.isEmpty(hot_formated) &&
        isHotPostSelected &&
        hot_formated.map((content, index) => <Contents key={index} onNavigateToContent={onNavigateToContentHandler} {...content} />)}
      {!_.isEmpty(top_formated) &&
        isTopPostSelected &&
        top_formated.map((content, index) => <Contents key={index} onNavigateToContent={onNavigateToContentHandler} {...content} />)}
      {!_.isEmpty(new_post_formated) &&
        isNewPostSelected &&
        new_post_formated.map((content, index) => <Contents key={index} onNavigateToContent={onNavigateToContentHandler} {...content} />)}
      {(isFetchingHotPosts || isFetchingBestPosts || isFetchingNewPosts || isFetchingTopPosts) && (
        <Card>
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" width="100%" height={508} />
        </Card>
      )}
    </Grid>
  );
});

export default HomePage;
