import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getSizeImage, formatDate, getPlayMusicUrl } from '@/utils/format-utils'
import { getSongDetailAction, changePlayMusicAction, changeSequenceAction, changeCurrentLyricIndexAction } from '../../store/actions'
import { AppPlayerBar, Control, PlayInfo, Operator } from './style'

import { Slider, message } from 'antd'

export default memo(function DHAppPlayBar() {

  // state and props
  const [currentTime, setCurrentTime] = useState(0)  // 当前歌曲播放时间
  const [progress, setProgress] = useState(0)  // 当前进度条值
  const [isPlaying, setIsPlaying] = useState(false)  // 当前歌曲是否在播放
  const [isChangeSlide, setIsChangeSlide] = useState(false)  // 当前是否在拖动进度条
  const loopTitle = ["列表循环", "单曲循环", "随机播放"]
  const [currentLoopTitle, setCurrentLoopTitle] = useState("列表循环")

  // redux-hooks
  const dispatch = useDispatch()
  const { 
    currentSong = {}, 
    sequence = 0, 
    lyricList = [], 
    currentLyricIndex = 0 
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
  }), shallowEqual)

  //react-hooks
  useEffect(() => {
    dispatch(getSongDetailAction({ ids: -1 }))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlayMusicUrl(currentSong.id)
    // 在 useEffect 中添加这一段代码原因有二
    // 必须设置成这种形式，否则谷歌浏览器会禁止自动播放音乐
    // 在切换到上/下首歌时会重新渲染，但是由于谷歌浏览器的限制导致不能自动播放
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
  }, [currentSong])

  const audioRef = useRef()

  // other handle 
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.al.name) || ""
  const songName = currentSong.name || ""
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTie = formatDate(currentTime, "mm:ss")

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const getCurrentTime = (event) => {
    // event.target.currentTime is measured in seconds
    let currentTime = event.target.currentTime * 1000
    let currentProgressValue = currentTime / duration * 100
    if (!isChangeSlide) {
      setCurrentTime(currentTime)
      setProgress(currentProgressValue)
    }

    /**
     * 获取当前播放歌曲的此时的歌词
     *  当前时间大于歌词的某一行对应的时间时则表示播放到当前歌词列表的前一句了
     *  所以最终展示的时候需要 i - 1
     */
    let i = 0
    for(; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if(lyricItem.time > currentTime) {
        break
      }
    }

    // 判断当前获取到的 i-1 和 currentLyricIndex 进行对比，如果 i-1 和 currentLyricIndex 不同才进行dispatch
    if(currentLyricIndex !== i-1) {
      dispatch(changeCurrentLyricIndexAction(i-1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      if (currentSong !== {}) {
        message.open({
          key: "lyric",
          content: content,
          duration: 0,
          className: "lyric-class"
        })
      }
    }

  }

  const onChangeSlide = useCallback((value) => {
    // value is from 0 to 100
    setIsChangeSlide(true)
    let currentProgressValue = value
    setProgress(currentProgressValue)
    setCurrentTime(value / 100 * duration)
  }, [duration])

  const onAfterChangeSlide = useCallback((value) => {
    // value is from 0 to 100
    setIsChangeSlide(false)
    let currentTime = value / 100 * duration
    setCurrentTime(currentTime)
    audioRef.current.currentTime = currentTime / 1000
    if (!isPlaying) {
      playMusic();
    }
  }, [isPlaying, duration, playMusic])

  const changePalyMusic = (tag) => {
    dispatch(changePlayMusicAction(tag))
    audioRef.current.currentTime = 0;
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });;
  }

  const changeSequence = useCallback(() => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    setCurrentLoopTitle(loopTitle[currentSequence || 0])
    dispatch(changeSequenceAction(currentSequence))
  }, [dispatch, sequence, loopTitle])

  const handleMusicEnded = () => {
    if (sequence === 1) { // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(res => {
        setIsPlaying(true);
      }).catch(err => {
        setIsPlaying(false);
      });;
    } else {
      dispatch(changePlayMusicAction(1));
    }
  }

  return (
    <AppPlayerBar className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" title="上一首" onClick={event => changePalyMusic(-1)}></button>
          <button className="sprite_player play" title="播放" onClick={event => playMusic()}></button>
          <button className="sprite_player next" title="下一首" onClick={event => changePalyMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img src={getSizeImage(picUrl, 34)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <a className="song-name" href="/todo">{songName}</a>
              <a className="sprite_player mv" href="/todo"> </a>
              <a className="singer-name" href="/todo">{singerName}</a>
              <a className="sprite_player source" href="/todo"> </a>
            </div>
            <div className="progress">
              <Slider defaultValue={0}
                value={progress}
                tipFormatter={null}
                onChange={value => onChangeSlide(value)}
                onAfterChange={value => onAfterChangeSlide(value)}
              />
              <div className="time">
                <span className="now-time">{showCurrentTie}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor" title="收藏"></button>
            <button className="sprite_player btn share" title="分享"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume" ></button>
            <button className="sprite_player btn loop" title={currentLoopTitle} onClick={event => changeSequence()}></button>
            <button className="sprite_player btn playlist" title="播放列表"></button>
          </div>
        </Operator>
      </div>
      <audio 
        ref={audioRef}
        onTimeUpdate={event => getCurrentTime(event)}
        onEnded={event => handleMusicEnded()}
      />
    </AppPlayerBar>
  )
})
