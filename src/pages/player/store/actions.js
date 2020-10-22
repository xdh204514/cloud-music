import * as fetch from '@/network/api'
import * as actionTypes from './action-types'
import { getRandomNumber } from "@/utils/math-utils"
import { parseLyric } from "@/utils/parse-utils"



const changeCurrentSongAciotn = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changeCurrentSongIndexAciotn = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

const changePlayListAciotn = (playList) => ({
  type: actionTypes.CHANGE_PALY_LIST,
  playList
})

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})

export const getSongDetailAction = (params) => {

  return (dispatch, getState) => {
    // 1. 从当前播放列表中查找将要播放的歌曲是否在列表中
    const willPlayIds = params.ids  // 用户点击的将要播放歌曲的id
    const currentPlayList = getState().getIn(["player", "playList"])  // 当前播放列表
    const willPlayIndex = currentPlayList.findIndex(item => item.id === willPlayIds)  // 查找ids

    if (willPlayIndex !== -1) {  // 1. 存在
      //1. 修改currentSongIndex 
      dispatch(changeCurrentSongIndexAciotn(willPlayIndex))
      //2. 修改currentSong
      dispatch(changeCurrentSongAciotn(currentPlayList[willPlayIndex]))
      // 3. 请求当前歌曲的歌词
      dispatch(getSongLyricAction({id: currentPlayList[willPlayIndex].id}));
    } else {  // 2. 不存在
      // 1. 发送网络请求
      fetch.apiPlayer.player.getCurrentSong(params).then(result => {
        const willPlaySong = result.songs && result.songs[0];
        if (!willPlaySong) return
        //2. 修改playList
        let newPlayList = [...currentPlayList]
        newPlayList.push(willPlaySong)
        dispatch(changePlayListAciotn(newPlayList))
        //2. 修改currentSongIndex 
        dispatch(changeCurrentSongIndexAciotn(newPlayList.length - 1))
        //3. 修改currentSong
        dispatch(changeCurrentSongAciotn(willPlaySong))
        // 4. 请求当前播放歌曲的歌词详情
        dispatch(getSongLyricAction({id: willPlaySong.id}));
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

export const changePlayMusicAction = (tag) => {
  return (dispatch, getState) => {
    const currentSequence = getState().getIn(["player", "sequence"])
    const currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    const currentPlayList = getState().getIn(["player", "playList"])
    let willPlayIndex = -1;
    if (currentSequence === 2) {  // 随机播放
      let randomIndex = getRandomNumber(currentPlayList.length)
      while (randomIndex === currentSongIndex) {
        randomIndex = getRandomNumber(currentPlayList.length)
      }
      willPlayIndex = randomIndex
    } else {  // 顺序播放：列表循环、单曲循环
      willPlayIndex = currentSongIndex + tag
      if (willPlayIndex > currentPlayList.length - 1) willPlayIndex = 0;
      if (willPlayIndex < 0) willPlayIndex = currentPlayList.length - 1;
    }

    // 1. 修改currentSongIndex
    dispatch(changeCurrentSongIndexAciotn(willPlayIndex))
    // 2. 修改currentSong
    dispatch(changeCurrentSongAciotn(currentPlayList[willPlayIndex]))
    // 3. 请求当前歌曲的歌词
    dispatch(getSongLyricAction({id: currentPlayList[willPlayIndex].id}));
  }
}

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const getSongLyricAction = (params) => {
  return dispatch => {
    fetch.apiPlayer.player.getSongLyric(params).then(result => {
      // 将  lyric 对象中的歌词存入 list 中
      const lyricList = parseLyric(result.lrc.lyric)
      dispatch(changeLyricListAction(lyricList))
    }).catch(error => {
      console.log(error)
    })
  }
}

export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})