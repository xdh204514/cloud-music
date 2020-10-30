import React, { memo } from 'react'

import DHPlayerInfo from "./children-pages/player-info"
import DHPlayerComments from "./children-pages/player-comments"
import DHPlayerSongs from "./children-pages/player-songs"
import DHPlayerSimilar from "./children-pages/player-similar"

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function DHPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <DHPlayerInfo />
          <DHPlayerComments />
        </PlayerLeft>
        <PlayerRight>
          <DHPlayerSimilar />
          <DHPlayerSongs />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
