import fetch from "../../../fetch";

const djradio = {
  getCateList: "/dj/catelist",
  getoRecommendList: "/dj/recommend/type",
  getRadioList: "/dj/radio/hot",
}

export const getCateList = (params) => {
  return fetch({
    url: djradio.getCateList,
    params
  })
}

export const getRecommendList = (params) => {
  return fetch({
    url: djradio.getoRecommendList,
    params
  })
}

export const getRadioList = (params) => {
  return fetch({
    url: djradio.getRadioList,
    params
  })
}