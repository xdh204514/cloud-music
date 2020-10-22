import fetch from '../../../fetch'

const player = {
  getCurrentSong: "/song/detail",
  getSongLyric: "/lyric",
};


export function getCurrentSong(params) {
  return fetch({
    url: player.getCurrentSong,
    method: 'get',
    params
  })
}

export function getSongLyric(params) {
  return fetch({
    url: player.getSongLyric,
    method: 'get',
    params
  })
}