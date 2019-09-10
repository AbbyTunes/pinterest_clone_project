import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveAllUsers = () => ({
	type: RECEIVE_ALL_USERS,
	users
});

export const receiveCurrentUser = (currentUser) => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const logoutCurrentUser = () => ({
	type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
	type: RECEIVE_SESSION_ERRORS,
	errors
});

// export const clearSessionErrors = () => ({
// 	type: CLEAR_SESSION_ERRORS
// })

export const signup = (user) => dispatch => (
	SessionApiUtil.signup(user)
		.then(
			(user) => (dispatch(receiveCurrentUser(user))),
			(responseError) => (dispatch(receiveSessionErrors(responseError.responseJSON)))
		)
)

export const login = (user) => dispatch => (
	SessionApiUtil.login(user)
	.then(
		(user) => (dispatch(receiveCurrentUser(user))),
		(responseError) => (dispatch(receiveSessionErrors(responseError.responseJSON)))
	)
);

export const logout = () => dispatch => (
	SessionApiUtil.logout()
	.then(response => dispatch(logoutCurrentUser()))
);

export const clearup = (dispatch) => {
	return dispatch({ type: CLEAR_SESSION_ERRORS })
}

