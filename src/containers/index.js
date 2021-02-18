import ImportLoadable from 'react-loadable'

import Loading from '../components/common/Loading'
import {asyncComponent} from '../until'

const Loadable = opts => ImportLoadable({
  loading: Loading,
  ...opts
})

export const HomePage = Loadable({
  loader: () => import('./Home/index')
})
export const FormPage = Loadable({
  loader: () => import('./Form/index')
})
export const NavPage = Loadable({
  loader: () => import('./Nav/NavPage')
})
import initialize from './App/initialize'

export {
  initialize
}
