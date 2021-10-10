import { makeStyles } from '@material-ui/core/styles';

const authLayoutStyle = makeStyles((theme) => ({
	root: {
		display: 'flex',
		minHeight: 'calc(100% - 120px)',
	},
	content: {
		// backgroundColor: theme.palette.background.default,
		height: '100%',
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	contentBody: {
		display: 'flex',
		justifyContent: 'center',
		padding: 50,
	},
}));

const topBarStyle = makeStyles((theme) => ({
	root: {
		boxShadow: 'none',
		background: '#00afcc',
	},
	toolBar: {
		paddingLeft: 0,
	},
	title: {
		flexGrow: 1,
		color: theme.palette.white,
		[theme.breakpoints.up('lg')]: {
			marginRight: theme.spacing(13),
		},
	},
	img: {
		maxWidth: '200px',
		height: '40px',
		[theme.breakpoints.down('sm')]: {
			height: '30px',
		},
	},
}));

export { authLayoutStyle, topBarStyle };
