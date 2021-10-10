import { makeStyles } from '@material-ui/core/styles';

const loginStyles = makeStyles((theme) => ({
	root: {
		marginTop: 80,
		paddingLeft: 100,
		paddingRight: 100,
		paddingBottom: 125,
		flexBasis: 700,
		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
		},
	},
	title: {
		marginTop: theme.spacing(3),
		color: '#d6d6d6',
	},
	error: {
		marginTop: theme.spacing(3),
		color: 'red',
	},
	textField: {
		marginTop: theme.spacing(2),
	},
	signInButton: {
		backgroundColor: '#d6d6d6',
		margin: theme.spacing(2, 0),
	},
	account: {
		color: 'black',
		textDecoration: 'underline',
	},
	accountSignUp: {
		marginBottom: theme.spacing(1),
	},
	forgetPassword: {
		color: 'black',
	},
}));

export { loginStyles };
