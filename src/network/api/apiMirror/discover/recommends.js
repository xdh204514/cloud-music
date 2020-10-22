import fetch from '../../../fetch'

const recommends = {
  getTopBanners: '/banner',  // 推荐页轮播图
  getHotRecommends: "/personalized",
  getNewAlbums: "/top/album",
  getPlayList: "/playlist/detail",
};


export function getTopBanners(params,) {
  return fetch({
    url: recommends.getTopBanners,
    method: 'get',
    params
  })
}

export function getHotRecommends(params) {
  return fetch({
    url: recommends.getHotRecommends,
    method: "get",
    params,
  })
}

export function getNewAlbums(params) {
  return fetch({
    url: recommends.getNewAlbums,
    method: "get",
    params,
  })
}

export function getPlayList(params) {
  return fetch({
    url: recommends.getPlayList,
    method: "get",
    params,
  })
}


// export function activityCreate(data, ){
//     return fetch({
//         url:activity.activityCreate,
//         method:'put',
//         data
//     })
// }
//
//
//
// export function activityUpdate(data, pk, ){
//     return fetch({
//         url:activity.activityUpdate.replace(':pk', pk),
//         method:'put',
//         data
//     })
// }
//
//
//
// export function activityDetail(params, pk, ){
//     return fetch({
//         url:activity.activityDetail.replace(':pk', pk),
//         method:'get',
//         params
//     })
// }
//
//
//
// export function activityRender(params, pk, ){
//     return fetch({
//         url:activity.activityRender.replace(':pk', pk),
//         method:'get',
//         params
//     })
// }
//
//
//
// export function activityDelete(params, pk, ){
//     return fetch({
//         url:activity.activityDelete.replace(':pk', pk),
//         method:'get',
//         params
//     })
// }

