import ScrollContainer from "react-indiana-drag-scroll";
import { messages } from "../../mockData/messagesData";
import { DemoProjectLogoInner } from "../demoProjectInfoBlock/styled";
import logo from "../../../../public/brandmark_blue.svg";
import {
  ChatScrollContainer,
  ChatWindow,
  MessageContainer,
  MessageContent,
  MessageDetails,
  MessageText,
  UserLogo,
} from "./styled";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

interface IDemoChatBlockProps {
  setIsBottom: Dispatch<SetStateAction<boolean>>;
}

const DemoChatBlock = ({ setIsBottom }: IDemoChatBlockProps) => {
  const listInnerRef = React.createRef<HTMLElement>();
  

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setIsBottom(true);
      }
    }
  };
  return (
    <ChatScrollContainer
      innerRef={listInnerRef}
      onScroll={() => onScroll()}
      vertical
      horizontal={false}
     
      
    >
      <ChatWindow>
        {messages &&
          messages.map((message) => (
            <MessageContainer key={message.id}>
              <UserLogo>
                <DemoProjectLogoInner
                  src={logo}
                  alt={"logo"}
                  height={"37px"}
                  width={"37px"}
                />
              </UserLogo>
              <MessageContent>
                <MessageDetails>
                  <span
                    className={
                      message.type === "PROJECT OWNER" ? "owner" : "investor"
                    }
                  >
                    {message.name}
                  </span>

                  <span> {message.type}</span>

                  <span> — {message.time}</span>
                </MessageDetails>
                <MessageText>{message.message}</MessageText>
              </MessageContent>
            </MessageContainer>
          ))}
      </ChatWindow>
    </ChatScrollContainer>
  );
};

export default DemoChatBlock;
