import fetch from '../../../fetch'

const ranking = {
  getAllTopList: '/toplist',  // 获取所有榜单
  getPlayList: "/playlist/detail"  // 榜单详情
};


export function getAllTopList() {
  return fetch({
    url: ranking.getAllTopList,
    method: 'get',
  })
}

export function getPlayList(params) {
  return fetch({
    url: ranking.getPlayList,
    method: "get",
    params,
  })
}