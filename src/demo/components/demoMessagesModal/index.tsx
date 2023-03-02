import { DemoProjectLogoInner } from "../demoProjectInfoBlock/styled";
import {
  BottomSection,
  ChatSectionWrapper,
  DemoMessagesProjectLogo,
  DMessagesModalWrapper,
  LogoSectionWrapper,
  MessagesModalCloseBtn,
  RoundButton,
} from "./styled";
import logo from "../../../../public/brandmark_blue.svg";
import useClickOutside from "../../../hooks/useClickOutside";
import { Divider } from "../../../components/buidl1Header/styled";
import DemoChatBlock from "../demoChatBlock";
import { useContext, useState } from "react";
import DemoTaskContext from "../../context/demoTaskContext";
import { IModalProps } from "../../../interfaces/IModal";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import Modal from "../../../components/modal";
import DemoMockDataContext from "../../context/demoMockDataContext";
import VoteAfterInvestigationCard from "../confirmationCard/voteAfterInvestigationCard";

const DemoMessagesModal = ({ onClose }: IModalProps) => {
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const { setCurrentTask } =
    useContext(DemoTaskContext);
  const {
    mockData: {
      userValues: { voted },
    },
  } = useContext(DemoMockDataContext);

  let domNode: any = useClickOutside(() => {
    onClose();
  });

  const handleThinkButtonClick = () => {
    setCurrentTask(CurrentTask.EVACUATE);
    setShowModal(true);
  };

  const handleTakeActionButtonClick = () => {
    setCurrentTask(CurrentTask.EVACUATE);
    setShowModal(true);
  };

  return (
    <>
      <DMessagesModalWrapper ref={domNode}>
        <MessagesModalCloseBtn onClick={onClose} />

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
            {isBottom && !voted && (
              <>
                <RoundButton vote onClick={handleThinkButtonClick}>
                  Think about it
                </RoundButton>
                <RoundButton
                  vote
                  className="filled"
                  onClick={handleTakeActionButtonClick}
                >
                  Take action
                </RoundButton>
              </>
            )}
          </BottomSection>
        </ChatSectionWrapper>
      </DMessagesModalWrapper>
      <Modal show={showModal}>
        <VoteAfterInvestigationCard onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default DemoMessagesModal;
