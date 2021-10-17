/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Grid, Typography, CardMedia, Card, IconButton, Button } from '@mui/material';
import {
  ArrowUpwardOutlined as ArrowUpwardOutlinedIcon,
  ArrowDownwardOutlined as ArrowDownwardOutlinedIcon,
  ChatBubbleOutlineRounded as ChatBubbleOutlineRoundedIcon,
  CardGiftcardRounded as CardGiftcardRoundedIcon,
  TrendingUp as TrendingUpIcon,
  TurnedInNot as TurnedInNotIcon,
} from '@mui/icons-material';
import moment from 'moment';
import { Gallery } from 'components/Gallery';
import { Comments } from 'components/Comments';
import Awards from 'components/Contents/components/Awards';
import _ from 'lodash';
import clsx from 'clsx';
import { SubmissionStyles } from './Styles';
import ReactPlayer from 'react-player/lazy';

const SubmissionPage = memo((props) => {
  const { getSubmission, clearSubmission } = props;
  const classes = SubmissionStyles();
  const { submission_details, comments } = useSelector(({ SubmissionPageReducer }) => SubmissionPageReducer);

  useEffect(() => {
    getSubmission(props.match.params.id);
  }, []); //

  console.log(process.env.REACT_APP_API_CLIENT_SECRET);
  const fortmatedUps = (ups) => {
    if (!_.isUndefined(ups)) {
      const ups_formated = ups.toString().length > 3 ? ups.toString() : ups;
      if (ups.toString().length > 3) {
      }
      return ups_formated;
    }
    return 0;
  };

  const flairStyle = (type) => {
    if (type === 'Media') {
      return classes.flair_media;
    }
    if (type === 'Current Episode') {
      return classes.flair_current_episode;
    }
    if (type === 'Fanart') {
      return classes.flair_fan_art;
    }
    if (type === 'Cosplay') {
      return classes.flair_cosplay;
    }
  };

  useEffect(() => {
    return () => {
      clearSubmission();
    };
  }, []);

  return (
    <Grid container direction="column">
      <Card sx={{ width: 750, minHeight: 128, maxHeight: 850, marginBottom: 5 }}>
        <Grid container>
          <Grid item xs={1}>
            <Grid item container xs={12} direction="column" justifyContent="center" alignItems="center">
              <IconButton size="large">
                <ArrowUpwardOutlinedIcon style={{ maxHeight: 16, width: 16 }} />
              </IconButton>
              <Typography variant="h6">{fortmatedUps(submission_details?.score)}</Typography>
              <IconButton size="large">
                <ArrowDownwardOutlinedIcon style={{ maxHeight: 16, width: 16 }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Grid item container xs={12} style={{ marginBottom: 10 }}>
              <Grid item xs={4}>
                <Typography variant="body2">{`Posted by u/${submission_details.author?.name}`}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{` ${moment(submission_details.created).format('HH')} hours`}</Typography>
              </Grid>
              {!_.isEmpty(submission_details.awards) && (
                <Grid item xs={5}>
                  <Awards awards={submission_details.awards} />
                </Grid>
              )}
            </Grid>
            <Grid item container alignItems="center" justifyContent="center" xs={12} style={{ marginBottom: 10 }}>
              <Grid item xs={2}>
                <Typography variant="body2" className={clsx(flairStyle(submission_details.link_flair_text))}>
                  {submission_details.link_flair_text}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" style={{ fontWeight: 700 }}>
                  {submission_details.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.content_detail} style={{ marginBottom: 10 }}>
              {!submission_details?.is_gallery && !submission_details?.is_video && !_.isEmpty(submission_details?.url) && (
                <CardMedia component="img" style={{ marginBottom: 10 }} height="600" width="650" image={submission_details?.url} />
              )}
              {submission_details?.is_video && (
                <ReactPlayer
                  style={{ marginBottom: 10, height: 450, marginRight: 20, width: '100%' }}
                  playing={true}
                  controls={true}
                  url={submission_details?.media.reddit_video.fallback_url}
                />
              )}
              {submission_details?.is_gallery && <Gallery images={submission_details?.gallery_data} />}
            </Grid>
            <Grid item container xs={12} direction="row" justifyContent="flex-start" alignItems="flex-end">
              <Button size="large">
                <ChatBubbleOutlineRoundedIcon size="large" color="disabled" style={{ maxHeight: 16, width: 16, marginRight: 2 }} />
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  {submission_details?.num_comments} Comments
                </Typography>
              </Button>

              <Button size="large">
                <CardGiftcardRoundedIcon size="large" color="disabled" style={{ maxHeight: 16, width: 16, marginRight: 2 }} />
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  Award
                </Typography>
              </Button>

              <Button size="large">
                <TrendingUpIcon size="large" color="disabled" style={{ maxHeight: 16, width: 16, marginRight: 2 }} />
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  Share
                </Typography>
              </Button>

              <Button size="large">
                <TurnedInNotIcon size="large" color="disabled" style={{ maxHeight: 16, width: 16, marginRight: 2 }} />
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  Save
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Comments comments={comments} />
    </Grid>
  );
});

export default SubmissionPage;
