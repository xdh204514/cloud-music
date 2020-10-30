import fetch from '../../../fetch'

const player = {
  getCurrentSong: "/song/detail",
  getSongLyric: "/lyric",
  getSimiSongList: "/simi/song",
  getSimiPlayList: "/simi/playlist",
  getPlayerMusicComment: "/comment/music",
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

export function getSimiSongList(params) {
  return fetch({
    url: player.getSimiSongList,
    method: 'get',
    params
  })
}

export function getSimiPlayList(params) {
  return fetch({
    url: player.getSimiPlayList,
    method: 'get',
    params
  })
}

export function getPlayerMusicComment(params) {
  return fetch({
    url: player.getPlayerMusicComment,
    method: 'get',
    params
  })
}

