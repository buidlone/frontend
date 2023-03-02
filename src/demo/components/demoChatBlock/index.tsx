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
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import DemoTaskContext from "../../context/demoTaskContext";
import Modal from "../../../components/modal";
import VoteConfiramationCard from "../confirmationCard/voteCard";
import DemoMockDataContext from "../../context/demoMockDataContext";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";

interface IDemoChatBlockProps {
  setIsBottom: Dispatch<SetStateAction<boolean>>;
}

const DemoChatBlock = ({ setIsBottom }: IDemoChatBlockProps) => {
  const { completedTasks, setCompletedTasks, currentTask, setCurrentTask } =
    useContext(DemoTaskContext);
  const listInnerRef = React.createRef<HTMLElement>();
  const [showModal, setShowModal] = useState(false);
  const {
    mockData: {
      userValues: { voted },
    },
  } = useContext(DemoMockDataContext);

  const showModalWithDelay = () => {
    setTimeout(function () {
      setCurrentTask(CurrentTask.EVACUATE);
      setShowModal(true);
    }, 1500);
  };

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setIsBottom(true);
        setCompletedTasks([...completedTasks, currentTask]);
        voted && showModalWithDelay();
      }
    }
  };
  return (
    <>
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
      <Modal show={showModal}>
        <VoteConfiramationCard onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default DemoChatBlock;
