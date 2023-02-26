import { DemoProjectLogoInner } from "../demoProjectInfoBlock/styled";
import {
  BottomSection,
  ChatSectionWrapper,
  DemoMessagesProjectLogo,
  DMessagesModalWrapper,
  LogoSectionWrapper,
  VoteButton,
} from "./styled";
import logo from "../../../../public/brandmark_blue.svg";
import useClickOutside from "../../../hooks/useClickOutside";
import { Divider } from "../../../components/buidl1Header/styled";
import DemoChatBlock from "../demoChatBlock";
import { useContext, useState } from "react";
import DemoTaskContext from "../../context/demoTaskContext";
import { IModalProps } from "../../../interfaces/IModal";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";

const DemoMessagesModal = ({ onClose }: IModalProps) => {
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const { setCurrentTask, setTasks, tasks, currentTask } =
    useContext(DemoTaskContext);

  let domNode: any = useClickOutside(() => {
    onClose();
  });

  const handleThinkButtonClick = () => {
    setCurrentTask(CurrentTask.EVACUATE);
    onClose();
  };

  const handleVoteButtonClick = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === 2) {
          return { ...task, projectState: 8 };
        } else {
          return task;
        }
      })
    );
    setCurrentTask(CurrentTask.EVACUATE);
    onClose();
  };

  return (
    <DMessagesModalWrapper ref={domNode}>
      <LogoSectionWrapper>
        <DemoMessagesProjectLogo>
          <DemoProjectLogoInner
            src={logo}
            alt={"logo"}
            height={"47px"}
            width={"47px"}
          />
        </DemoMessagesProjectLogo>
      </LogoSectionWrapper>
      <ChatSectionWrapper>
        <DemoChatBlock setIsBottom={setIsBottom} />
        {!isBottom && <Divider />}
        <BottomSection>
          {isBottom && (
            <>
              <VoteButton onClick={handleThinkButtonClick}>
                Think about it
              </VoteButton>
              <VoteButton className="filled" onClick={handleVoteButtonClick}>
                Vote now
              </VoteButton>
            </>
          )}
        </BottomSection>
      </ChatSectionWrapper>
    </DMessagesModalWrapper>
  );
};

export default DemoMessagesModal;
