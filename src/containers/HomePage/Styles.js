import { makeStyles } from '@material-ui/styles';

export const AddNotificationPageStyle = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl': {
      display: 'none!important',
    },
  },
  paper: {
    backgroundColor: '#fbfbfb',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    width: 614,
    height: 39,
    marginBottom: 16,
  },
  buttonListSelected: {
    backgroundColor: '#f5f5f5 !important',
  },

  margin: {
    margin: theme.spacing(1),
  },
}));
