import * as fetch from '@/network/api';
import * as actionTypes from './action-types';
import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-utils";



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

// 立即播放点击歌曲
const getSongDetailActionNow = (data) => {
  const { dispatch, willPlayIndex, currentPlayList, needPlayIds } = data

  if (willPlayIndex !== -1) {  // 1. 存在
    //1. 修改currentSongIndex 
    dispatch(changeCurrentSongIndexAciotn(willPlayIndex))
    //2. 修改currentSong
    dispatch(changeCurrentSongAciotn(currentPlayList[willPlayIndex]))
    // 3. 请求当前歌曲的歌词
    dispatch(getSongLyricAction({ id: currentPlayList[willPlayIndex].id }));
  } else {  // 2. 不存在
    // 1. 发送网络请求
    fetch.apiPlayer.player.getCurrentSong({ ids: needPlayIds }).then(result => {
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
      dispatch(getSongLyricAction({ id: willPlaySong.id }));
    }).catch(error => {
      console.log(error)
    })
  }
}

// 将点击的歌曲添加到播放列表
const getSongDetailActionAfter = (data) => {
  const { dispatch, willPlayIndex, currentPlayList, needPlayIds } = data

  if (willPlayIndex !== -1) {  // 存在
    return
  } else {  // 2. 不存在
    // 1. 发送网络请求
    fetch.apiPlayer.player.getCurrentSong({ ids: needPlayIds }).then(result => {
      const willPlaySong = result.songs && result.songs[0];
      if (!willPlaySong) return
      //2. 修改playList
      let newPlayList = [...currentPlayList]
      newPlayList.push(willPlaySong)

      dispatch(changePlayListAciotn(newPlayList))
    }).catch(error => {
      console.log(error)
    })
  }
}

// 点击播放或者添加到播放列表
export const getSongDetailAction = (params) => {
  return (dispatch, getState) => {
    // 1. 从当前播放列表中查找将要播放的歌曲是否在列表中
    const needPlayIds = params.ids  // 用户点击的歌曲的id
    const isPlayNow = params.isPlayNow  // true：立即播放该歌曲 false：添加到播放列表
    const currentPlayList = getState().getIn(["player", "playList"])  // 当前播放列表
    const willPlayIndex = currentPlayList.findIndex(item => item.id === needPlayIds)  // 查找ids

    const data = { dispatch, willPlayIndex, currentPlayList, needPlayIds }

    isPlayNow ? getSongDetailActionNow(data) : getSongDetailActionAfter(data)
  }
}

// 改变当前播放歌曲：上一首/下一首
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
    dispatch(getSongLyricAction({ id: currentPlayList[willPlayIndex].id }));
  }
}

// 修改播放顺序
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

// 获取播放歌曲的歌词
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

// 播放歌曲当前歌词所在行
export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})

// 点击歌单播放整个歌单列表歌曲
export const resetPlayListAction = (params) => {
  return dispatch => {
    let playList = null
    if (params.id !== -1) {
      fetch.apiDiscover.recommends.getPlayList(params).then(result => {
        playList = result.playlist && result.playlist.tracks

        dispatch(changePlayListAciotn(playList))
        dispatch(changeCurrentSongIndexAciotn(0))
        dispatch(changeCurrentSongAciotn(playList[0]))
        dispatch(getSongLyricAction({ id: playList[0].id }));
      }).catch(error => {
        console.log(error)
      })
    } else {
      dispatch(changePlayListAciotn([]))
    }
  }
}

export const deleteOneInPlayListAction = (params) => {
  return (dispatch, getState) => {
    const deleteIndex = params.index
    const currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    const currentPlayList = getState().getIn(["player", "playList"])
    const newPlayList = currentPlayList.filter((item, index) => {
      return index !== deleteIndex
    })
    // 无论删除哪一首歌都对 playList 进行重新赋值
    dispatch(changePlayListAciotn(newPlayList))

    // 当删除的歌的 index 小于当前播放的 currentSongIndex，则将 currentSongIndex 往前移1位
    if ( 0 < deleteIndex < currentSongIndex) {
      dispatch(changeCurrentSongIndexAciotn(currentSongIndex - 1))
    }

    // 当删除的歌曲恰好为播放的歌曲
    // 1. 则修改 currentSongIndex 为下一首歌曲的 index，并判断边界值
    // 2. 执行 changePlayMusicAction 进行下一首播放
    if (currentSongIndex === deleteIndex) {
      if (newPlayList.length > 0) {
        let willPlayIndex = deleteIndex - 1
        if (willPlayIndex > newPlayList.length - 1) willPlayIndex = 0;
        if (willPlayIndex < 0) willPlayIndex = newPlayList.length - 1;
        dispatch(changeCurrentSongIndexAciotn(willPlayIndex))
        dispatch(changePlayMusicAction(1))
      }
    }
  }
}

