import React, { memo } from 'react';
import { renderRoutes} from 'react-router-config';

import routes from '@/router'
import { BrowserRouter } from 'react-router-dom';

import DHAppHeader from '@/components/content/app-header'
import DHAppFooter from '@/components/content/app-footer'


export default memo(function App() {
  return (
    <BrowserRouter>
      <DHAppHeader/>
      {renderRoutes(routes)}
      <DHAppFooter/>
    </BrowserRouter>
  )
})
