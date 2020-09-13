import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from 'react-loadable'

const PrivateActivationRoute = loadable({
  loader: () => import('./PrivateActivationRoute'),
  loading: () => <div />
})
const PrivateResetRoute = loadable({
  loader: () => import('./PrivateResetRoute'),
  loading: () => <div />
})
const Login = loadable({
  loader: () => import('../components/auth/Login'),
  loading: () => <div />
})
const Register = loadable({
  loader: () => import('../components/auth/Register'),
  loading: () => <div />
})
const NotFound = loadable({
  loader: () => import('../components/NotFound'),
  loading: () => (
    <div>
      <h4>Loading...</h4>
    </div>
  ),
  delay: 3000
})
const Profile = loadable({
  loader: () => import('../components/pages/Profile'),
  loading: () => (
    <div>
      <h4>Loading...</h4>
    </div>
  ),
  delay: 3000
})
const OngkirApp = loadable({
  loader: () => import('../components/pages/Ongkir'),
  loading: () => (
    <div>
      <h4>Loading...</h4>
    </div>
  ),
  delay: 3000
})
const Activation = loadable({
  loader: () => import('../components/auth/Activation'),
  loading: () => (
    <div>
      <h4>Loading...</h4>
    </div>
  ),
  delay: 3000
})
const ForgotPassword = loadable({
  loader: () => import('../components/auth/Forgot'),
  loading: () => <div />
})
const ResetPassword = loadable({
  loader: () => import('../components/auth/Reset'),
  loading: () => (
    <div>
      <h4>Loading...</h4>
    </div>
  ),
  delay: 3000
})
const ResendToken = loadable({
  loader: () => import('../components/auth/Resend'),
  loading: () => <div />
})
const VerifyActivation = loadable({
  loader: () => import('../components/auth/VerifyActivation'),
  loading: () => (
    <div>
      <h4>Loading...</h4>
    </div>
  )
})
const VerifyReset = loadable({
  loader: () => import('../components/auth/VerifyReset'),
  loading: () => (
    <div>
      <h4>Loading...</h4>
    </div>
  )
})
const Logout = loadable({
  loader: () => import('../components/auth/Logout'),
  loading: () => <div />
})

const PublicRoute = () => (
  <>
    <Switch>
      <Route exact path='/' component={OngkirApp} />
      <Route path='/signin' component={Login} />
      <Route path='/signup' component={Register} />
      <Route path='/profile' component={Profile} />
      <PrivateActivationRoute path='/activation/:id' component={Activation} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/resend-token' component={ResendToken} />
      <PrivateResetRoute path='/reset-password/:id' component={ResetPassword} />
      <Route path='/verify-activation/:id' component={VerifyActivation} />
      <Route path='/verify-reset/:id' component={VerifyReset} />
      <Route path='/logout' component={Logout} />
      <Route path='*' component={NotFound} />
    </Switch>
  </>
)

export default PublicRoute