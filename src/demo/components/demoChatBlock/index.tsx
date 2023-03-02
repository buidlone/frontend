import { messages } from "../../mockData/messagesData";
import { DemoProjectLogoInner } from "../demoProjectInfoBlock/styled";
import {
  ChatScrollContainer,
  ChatWindow,
  MessageContainer,
  MessageContent,
  MessageDetails,
  MessageText,
  UserLogo,
} from "./styled";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import DemoTaskContext from "../../context/demoTaskContext";

interface IDemoChatBlockProps {
  setIsBottom: Dispatch<SetStateAction<boolean>>;
}

const DemoChatBlock = ({ setIsBottom }: IDemoChatBlockProps) => {
  const { completedTasks, setCompletedTasks, currentTask } =
    useContext(DemoTaskContext);
  const listInnerRef = React.createRef<HTMLElement>();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollHeight } = listInnerRef.current;
      listInnerRef.current.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });

      setIsBottom(true);
      setCompletedTasks([...completedTasks, currentTask]);
    }
  };

  useEffect(() => {
    onScroll();
  }, []);
  return (
    <>
      <ChatScrollContainer
        innerRef={listInnerRef}
        //onScroll={() => onScroll()}
        vertical
        horizontal={false}
      >
        <ChatWindow>
          {messages &&
            messages.map((message) => (
              <MessageContainer key={message.id}>
                <UserLogo>
                  <DemoProjectLogoInner
                    src={message.image}
                    alt={"logo"}
                    height={"54px"}
                    width={"54px"}
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
    </>
  );
};

export default DemoChatBlock;
