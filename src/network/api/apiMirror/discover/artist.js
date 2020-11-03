import fetch from "../../../fetch";

const artist = {
  getArtistList: "/artist/list",
  getHotArtistList: "/top/artists",
}

export const getHotArtistList = (params) => {
  return fetch({
    url: artist.getHotArtistList,
    params
  })
}

export const getArtistList = (params) => {
  return fetch({
    url: artist.getArtistList,
    params
  })
}