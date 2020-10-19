import fetch from '../../../fetch'

const recommends = {
  getTopBanners: '/banner',  // 推荐页轮播图
};


export function getTopBanners(params,) {
  return fetch({
    url: recommends.getTopBanners,
    method: 'get',
    params
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

