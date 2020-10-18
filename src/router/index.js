import DHDiscover from '@/pages/discover'
import DHMine from '@/pages/mine'
import DHFriends from '@/pages/friends'

const routes = [
  {
    path: "/",
    exact: true,
    component: DHDiscover
  },
  {
    path: "/mine",
    component: DHMine
  },
  {
    path: "/friends",
    component: DHFriends
  }
]

export default routes