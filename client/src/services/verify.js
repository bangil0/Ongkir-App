import jwt from 'jsonwebtoken'

export const isVerifyToken = (token) => {
	if (token) {
		const decoded = jwt.decode(token)
		if (decoded) return true
	}
	return false
}
