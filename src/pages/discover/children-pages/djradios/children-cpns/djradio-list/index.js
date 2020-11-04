import React, { memo, useEffect, useState } from 'react';
import {shallowEqual, useDispatch, useSelector } from "react-redux";

import { getRadioListAction } from "../../store/actions";
import { RdiaoListWrapper } from "./style";

import DHThemeHeaderNormal from "@/components/content/theme-header-normal";
import DHPagination from "@/components/content/pagination";
import DHRadioCover from "./children-cpns/radio-cover";
import { RADIO_PER_PAGE_NUM } from '@/common/constant';

export default memo(function DHRadioList() {
  // state and props
  const [currentPage, setCurrentPage] = useState(1);

  // redux-hooks
  const dispatch = useDispatch()
  const { currentCatId, radioList } = useSelector(state => ({
    currentCatId: state.getIn(["djradio", "currentCatId"]),
    radioList: state.getIn(["djradio", "radioList"]),
  }), shallowEqual)

  // react-hooks
  useEffect(() => {
    currentCatId !== -1 && dispatch(getRadioListAction({cateId: currentCatId,}))
  }, [dispatch, currentCatId])

  // other handle
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getRadioListAction({cateId: currentCatId, offset: (page - 1) * RADIO_PER_PAGE_NUM}))
  }
  return (
    <RdiaoListWrapper>
      <DHThemeHeaderNormal title="电台排行榜" />
      <div className="radio-list">
        {
          radioList.map((item, index) => {
            return (
              <DHRadioCover info={item} key={item.id}/>
            )
          })
        }
      </div>
      <DHPagination 
        currentPage={currentPage} 
        total={1000} 
        pageSize={30}
        onPageChange={onPageChange}
      />
    </RdiaoListWrapper>
  )
})
