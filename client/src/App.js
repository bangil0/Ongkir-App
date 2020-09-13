import React from 'react'
import Loadable from 'react-loadable'

const NavbarLink = Loadable({
  loader: () => import('./components/layout/Navbar'),
  loading: () => <div />
})
const PublicRoute = Loadable({
  loader: () => import('./routes/PublicRoute'),
  loading: () => <div />
})

const App = () => (
  <>
    <NavbarLink />
    <PublicRoute />
  </>
)

export default App
