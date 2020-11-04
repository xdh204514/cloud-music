import React, { memo } from 'react';
import { DjRadioWrapper } from "./style";

import DHRecommendList from "./children-cpns/djradio-recommend";
import DHCateList from "./children-cpns/djradio-catelist";
import DHRadioList from "./children-cpns/djradio-list";

export default memo(function DHDjRadios() {

  return (
    <DjRadioWrapper className="wrap-v2">
      <DHCateList />
      <DHRecommendList />
      <DHRadioList />
    </DjRadioWrapper>
  )
})
