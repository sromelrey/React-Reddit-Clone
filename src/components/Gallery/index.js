/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useEffect } from 'react';
import { Grid, CardMedia, IconButton } from '@mui/material';
import { ArrowBackIosNew as ArrowBackIosNewIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';

export const Gallery = memo((props) => {
  const [image, setImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const [imageLength, setImageLength] = useState(0);

  useEffect(() => {
    setImage(props.images[0].s.u);
    setImageLength(props.images.length - 1);
  }, []);

  const onNextImageHandler = () => {
    const previmageIndex = imageIndex;
    const nextIndex = previmageIndex + 1;
    setImageIndex(nextIndex);

    if (nextIndex !== imageLength) {
      const nextImage = props.images[nextIndex].s.u;
      setImage(nextImage);
    }
  };
  const onPreviousImageHandler = () => {
    const previmageIndex = imageIndex;
    const prevIndex = previmageIndex - 1;
    setImageIndex(prevIndex);
    if (prevIndex !== imageLength + 1) {
      const prevImage = props.images[prevIndex].s.u;
      setImage(prevImage);
    }
  };

  return (
    <Grid container>
      <Grid item xs={1}>
        {imageIndex !== 0 && (
          <IconButton size="large" style={{ backgroundColor: '#eeeeee', top: 100 }} onClick={onPreviousImageHandler}>
            <ArrowBackIosNewIcon size="large" />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={10}>
        <CardMedia component="img" height="450" image={image} />
      </Grid>
      <Grid item xs={1}>
        {imageIndex !== imageLength - 1 && (
          <IconButton size="large" style={{ backgroundColor: '#eeeeee', top: 100 }} onClick={onNextImageHandler}>
            <ArrowForwardIosIcon size="large" />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
});
