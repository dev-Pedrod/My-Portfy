import P from 'prop-types';

import React, { useEffect } from 'react'
import { useState } from 'react'

// styles
import { LoadingBar, MessageContainer, MessageText, MessageWrapper } from './MessageStyles'

export const Message = ({isSuccess, text}) => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
      if(!text){
        setVisible(false);
        return
      }
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
      }, 4000)
      return (() => clearTimeout(timer))
    }, [text]) 

  return (
    <>
        {visible &&(
            <MessageContainer>
                <MessageWrapper isSuccess={isSuccess}>
                    <MessageText>{text}</MessageText>
                    <LoadingBar/>
                </MessageWrapper>
            </MessageContainer>
        )}
    </>
  )
}

Message.propTypes = {
    isSuccess: P.bool,
    text: P.string
};
