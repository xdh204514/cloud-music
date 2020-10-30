import fetch from '../../../fetch'

const playlist = {
  getCatList: '/playlist/catlist',  // 获取歌单分类
  getHot: "/playlist/hot"  // 获取热门歌单
};


export function getCatList() {
  return fetch({
    url: playlist.getCatList,
    method: 'get',
  })
}

export function getHot(params) {
  return fetch({
    url: playlist.getHot,
    method: "get",
    params,
  })
}