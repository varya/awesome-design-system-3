import React from 'react'
import milligramStyles from '!!raw-loader!milligram/dist/milligram.css'
import {Frame} from '@bridgetool/gatsby-theme-dev'

function LivePreviewWrapper({children}) {
  return (
    <Frame>
      <style>
        {`.brdigetool-frame {
          padding: 16px !important
        }`}
        {milligramStyles}
      </style>
      <div className="brdigetool-frame">{children}</div>
    </Frame>
  )
}

export default LivePreviewWrapper
