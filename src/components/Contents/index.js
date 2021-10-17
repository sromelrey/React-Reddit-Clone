import React, { memo } from 'react';
import { Grid, Typography, CardMedia, Card, IconButton, Button } from '@mui/material';

import { ContentStyles } from './Styles';
import { Awards } from './components';
import { Gallery } from 'components/Gallery';
import moment from 'moment';
import clsx from 'clsx';
import _ from 'lodash';
import {
  ArrowUpwardOutlined as ArrowUpwardOutlinedIcon,
  ArrowDownwardOutlined as ArrowDownwardOutlinedIcon,
  ChatBubbleOutlineRounded as ChatBubbleOutlineRoundedIcon,
  CardGiftcardRounded as CardGiftcardRoundedIcon,
  TrendingUp as TrendingUpIcon,
  TurnedInNot as TurnedInNotIcon,
} from '@mui/icons-material';
import ReactPlayer from 'react-player/lazy';

export const Contents = memo((props) => {
  const classes = ContentStyles();
  const {
    is_video,
    author,
    created,
    link_flair_text,
    awards,
    title,
    url,
    thumbnail,
    num_comments,
    ups,
    onNavigateToContent,
    permalink,
    media,
    is_gallery,
    gallery_data,
  } = props;

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
  };

  const fortmatedUps = (ups) => {
    const ups_formated = ups.toString().length > 3 ? ups.toString() : ups;
    if (ups.toString().length > 3) {
    }
    return ups_formated;
  };

  const onNavigateToContentHandler = (event, permalink) => {
    if (event.currentTarget !== event.target) return;
    onNavigateToContent(event, permalink);
  };

  return (
    <Grid container direction="column">
      <Card
        sx={{ width: 614, minHeight: 128, maxHeight: 614, marginBottom: 5 }}
        onClick={(event) => onNavigateToContentHandler(event, permalink)}
        className={classes.paper}
      >
        <Grid container className={classes.content_container} onClick={(event) => onNavigateToContentHandler(event, permalink)}>
          <Grid item xs={1}>
            <Grid item container xs={12} direction="column" justifyContent="center" alignItems="center" className={classes.content_detail}>
              <IconButton size="small">
                <ArrowUpwardOutlinedIcon style={{ maxHeight: 16, width: 16 }} />
              </IconButton>
              <Typography variant="body2">{fortmatedUps(ups)}</Typography>
              <IconButton size="small">
                <ArrowDownwardOutlinedIcon style={{ maxHeight: 16, width: 16 }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Grid item container xs={12} className={classes.content_detail} style={{ marginBottom: 10 }}>
              <Grid item xs={4}>
                <Typography variant="body2">{`Posted by u/${author}`}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{` ${moment(created).format('HH')} hours`}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Awards awards={awards} />
              </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.content_detail} style={{ marginBottom: 10 }}>
              <Grid item xs={2}>
                <Typography variant="body2" className={clsx(flairStyle(link_flair_text))}>
                  {link_flair_text}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" style={{ fontWeight: 700 }}>
                  {title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.content_detail} style={{ marginBottom: 10 }}>
              {!is_gallery && !is_video && !_.isEmpty(url) && thumbnail !== 'self' && (
                <CardMedia component="img" style={{ marginBottom: 10 }} height="450" image={url} />
              )}
              {is_video && (
                <ReactPlayer
                  style={{ marginBottom: 10, height: 450, marginRight: 20, width: '100%' }}
                  playing={true}
                  controls={true}
                  url={media.reddit_video.fallback_url}
                />
              )}
              {is_gallery && <Gallery images={gallery_data} />}
            </Grid>
            <Grid item container xs={12} direction="row" justifyContent="flex-start" alignItems="flex-end">
              <Button size="large" onClick={(event) => onNavigateToContentHandler(event, permalink)}>
                <ChatBubbleOutlineRoundedIcon size="large" color="disabled" style={{ maxHeight: 16, width: 16, marginRight: 2 }} />
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  {num_comments} Comments
                </Typography>
              </Button>

              <Button size="large" onClick={onNavigateToContent}>
                <CardGiftcardRoundedIcon size="large" color="disabled" style={{ maxHeight: 16, width: 16, marginRight: 2 }} />
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  Award
                </Typography>
              </Button>

              <Button size="large" onClick={onNavigateToContent}>
                <TrendingUpIcon size="large" color="disabled" style={{ maxHeight: 16, width: 16, marginRight: 2 }} />
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  Share
                </Typography>
              </Button>

              <Button size="large" onClick={onNavigateToContent}>
                <TurnedInNotIcon size="large" color="disabled" style={{ maxHeight: 16, width: 16, marginRight: 2 }} />
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  Save
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
});
