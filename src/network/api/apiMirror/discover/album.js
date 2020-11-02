import fetch from "../../../fetch";

const album = {
  getHotAlbum: "/album/newest",
  getTopAlbum: "/top/album",
}


export const getHotAlbum = (params) => {
  return fetch({
    url: album.getHotAlbum,
    params
  })
}

export const getTopAlbum = (params) => {
  return fetch({
    url: album.getTopAlbum,
    params
  })
}