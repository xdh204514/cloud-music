import React from 'react';
import { Redirect } from "react-router-dom";

import DHDiscover from '@/pages/discover'
import DHMine from '@/pages/mine'
import DHFriends from '@/pages/friends'
import DHAlbums from '../pages/discover/children-pages/albums'
import DHArtists from '../pages/discover/children-pages/artists'
import DHDjRadios from '../pages/discover/children-pages/djradios'
import DHRanking from '../pages/discover/children-pages/ranking'
import DHRecommends from '../pages/discover/children-pages/recommends'
import DHSongs from '../pages/discover/children-pages/songs'

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: DHDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommends"/>
        )
      },
      {
        path: "/discover/recommends",
        component: DHRecommends
      },
      {
        path: "/discover/ranking",
        component: DHRanking
      },
      {
        path: "/discover/songs",
        component: DHSongs
      },
      {
        path: "/discover/djradios",
        component: DHDjRadios
      },
      {
        path: "/discover/artists",
        component: DHArtists
      },
      {
        path: "/discover/albums",
        component: DHAlbums
      }
    ]
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