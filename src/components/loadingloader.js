import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={368}
    viewBox="0 0 300 368"
    backgroundColor="#2e344e"
    foregroundColor="#3c435f"
    {...props}
  >
    <rect x="14" y="10" rx="0" ry="0" width="336" height="250" /> 
    <rect x="19" y="281" rx="0" ry="0" width="138" height="11" /> 
    <rect x="19" y="302" rx="0" ry="0" width="203" height="12" />
  </ContentLoader>
)

export default MyLoader