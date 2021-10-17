import { makeStyles } from '@material-ui/styles';

export const SubmissionStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    '&:hover': {
      border: '1px solid #a8a5a5',
      cursor: 'pointer',
    },
    backgroundColor: '#fbfbfb',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
  },
  content_container: {
    height: 'calc(100%)',
    maxHeight: 'calc(100%)',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  content_detail: { padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 5 },

  buttonListSelected: {
    border: '2px solid #f9f9f9',
    backgroundColor: '#0089ff29',
    borderRadius: 20,
  },
  flair_media: {
    backgroundColor: '#0dd3bb',
    textAlign: 'center',
    width: 50,
  },
  flair_current_episode: {
    backgroundColor: '#EDEFF1',
    textAlign: 'center',
    color: '#1A1A1B',
    width: 130,
  },
  flair_fan_art: {
    backgroundColor: '#ffb000',
    textAlign: 'center',
    color: '#000000',
    width: 50,
  },
  flair_cosplay: {
    padding: 2,
    backgroundColor: '#ffa0f3',
    textAlign: 'center',
    color: '#efefef',
    width: 50,
  },
}));
