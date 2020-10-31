import React, { memo } from 'react';

import { PER_PAGE_NUM } from "@/common/constant"
import { PaginationWrapper } from './style';

import { Pagination } from 'antd';

export default memo(function DHPagination(props) {
  const { currentPage, total, onPageChange } = props;

  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === 'next') {
      return <button className="control next">下一页 &gt;</button>;
    }
    return originalElement;
  }
  
  return (
    <PaginationWrapper>
      <Pagination className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={PER_PAGE_NUM}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange} />
    </PaginationWrapper>
  )
})
