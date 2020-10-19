import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'

import routes from '@/router';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store'

import DHAppHeader from '@/components/content/app-header';
import DHAppFooter from '@/components/content/app-footer';


export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DHAppHeader />
        {renderRoutes(routes)}
        <DHAppFooter />
      </BrowserRouter>
    </Provider>
  )
})
