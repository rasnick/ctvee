import React, { useState, useEffect } from 'react';

import imagePlaceholder from '../images/no_image.png'

const useImage = (propImage) => {
  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (propImage) {
      setIsLoading(true)
      const httpsURL = propImage.medium.replace('http', 'https')
      fetch(httpsURL)
        .then(response => response.blob())
        .then(images => {
          let outside = URL.createObjectURL(images)
          setImage(
            <div style={{paddingRight: "20px", paddingLeft: "20px"}}>
              <img src={outside} alt=""/>
            </div>
          )
          setIsLoading(false)
        })
    } else {
      setImage(
        <React.Fragment>
          <img src={imagePlaceholder} alt=""/>
        </React.Fragment>
      )
      setIsLoading(false)
    }
  }, [propImage])

  return [image, isLoading]
}

export default useImage