import axios from 'axios'

export const forgotState = {
	type: '',
	email: '',
	messages: [],
	btnText: 'Forgot Password',
	btnDisabled: false
}

export const FORGOT_SUCCESS = 'FORGOT_SUCCESS'
export const FORGOT_FAILED = 'FORGOT_FAILED'
export const FORGOT_CLEANUP = 'FORGOT_CLEANUP'

export const forgotActionCreator = (type, payload) => (dispatch) => {
	axios
		.post('/api/user/forgot-password', {
			email: payload.email
		})
		.then(({ data }) => {
			dispatch({
				type: type,
				payload: {
					type: FORGOT_SUCCESS,
					messages: data.success,
					btnText: payload.btnText,
					btnDisabled: payload.btnDisabled
				}
			})

			setTimeout(() => {
				dispatch({
					type: FORGOT_CLEANUP,
					payload: { ...forgotState }
				})
			}, 3000)
		})
		.catch((err) => {
			dispatch({
				type: FORGOT_FAILED,
				payload: {
					type: FORGOT_FAILED,
					messages: err.response.data.error,
					btnText: payload.btnText,
					btnDisabled: payload.btnDisabled
				}
			})

			setTimeout(() => {
				dispatch({
					type: FORGOT_CLEANUP,
					payload: { ...forgotState }
				})
			}, 3000)
		})
}
