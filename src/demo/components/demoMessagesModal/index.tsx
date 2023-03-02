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
import VoteConfiramationCard from "../confirmationCard/voteCard";

const DemoMessagesModal = ({ onClose }: IModalProps) => {
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const { setCurrentTask } = useContext(DemoTaskContext);
  const {
    mockData: {
      userValues: { voted },
    },
  } = useContext(DemoMockDataContext);

  let domNode: any = useClickOutside(() => {
    onClose();
  });

  const handleTakeActionButtonClick = () => {
    setCurrentTask(CurrentTask.EVACUATE);
    voted ? setShowModal2(true) : setShowModal1(true);
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
            {isBottom && (
              <>
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
      <Modal show={showModal1}>
        <VoteAfterInvestigationCard onClose={() => setShowModal1(false)} />
      </Modal>
      <Modal show={showModal2}>
        <VoteConfiramationCard onClose={() => setShowModal2(false)} />
      </Modal>
    </>
  );
};

export default DemoMessagesModal;
