import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'

import routes from '@/router';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store'

import DHAppHeader from '@/components/content/app-header';
import DHAppFooter from '@/components/content/app-footer';
import DHAppPlayBar from '@/pages/player/children-pages/app-play-bar'


export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DHAppHeader />
        <Suspense fallback={<div>loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <DHAppFooter />
        <DHAppPlayBar />
      </BrowserRouter>
    </Provider>
  )
})
