import React from 'react';
import { Skeleton as MuiSkeleton } from '@mui/material';

export const Skeleton = (props) => {
  const { variant, width, height } = props;
  return <MuiSkeleton variant />;
};
