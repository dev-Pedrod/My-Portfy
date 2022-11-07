import React, {useEffect, useState} from "react";

// styles
import * as Styled from "./styles";

type MessageProps = {
  isSuccess: boolean;
  text: string
}

export const Message = ({ isSuccess, text }: MessageProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!text) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      {visible && (
        <Styled.MessageContainer>
          <Styled.MessageWrapper isSuccess={isSuccess}>
            <Styled.DivIcon>
              {isSuccess? <Styled.Success/> : <Styled.Error/> }
            </Styled.DivIcon>
            <Styled.MessageDiv>
              <Styled.MessageText>{text}</Styled.MessageText>
              <Styled.LoadingBar />
            </Styled.MessageDiv>
          </Styled.MessageWrapper>
        </Styled.MessageContainer>
      )}
    </>
  );
};
