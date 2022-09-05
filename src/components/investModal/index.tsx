import Image from "next/image";
import {
  IModalHeader,
  IModalWrapper,
  CloseButton,
  LogoWrapper,
  IModalForm,
  IModalInputSectionWrapper,
  IModalFieldWrapper,
  InputField,
  OutputField,
  SelectField,
  InputLabel,
  IModalFormConfirmSection,
  ProceedButton,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
} from "./styled";
import BuidlLogo from "../../../public/BuidlLogo.png";

import Accordion from "../accordion";
import TokenStreamTable from "../tokenStreamTable";

let items = [
  {
    name: "Detailed project token stream",
    content: <TokenStreamTable />,
  },
];

interface IInvest {
  onClose(): void;
}
const InvestModal = ({ onClose }: IInvest) => {
  const options = [
    { value: "usdt", label: "USDT" },
    { value: "usdt", label: "USDT" },
    { value: "usdt", label: "USDT" },
    { value: "usdt", label: "USDT" },
  ];

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <IModalWrapper>
      <IModalHeader>
        <LogoWrapper>
          <Image className="logo" src={BuidlLogo} />
          <div>Buidl 1</div>
        </LogoWrapper>
        <a href="#" onClick={handleClose}>
          <CloseButton />
        </a>
      </IModalHeader>
      <IModalForm>
        <IModalInputSectionWrapper>
          <IModalFieldWrapper>
            <InputLabel>Your investment</InputLabel>
            <InputField type="text" placeholder="12 000"></InputField>

            <div className="bottomText">Etherium network</div>
            <SelectField
              options={options}
              classNamePrefix="react-select"
              defaultValue={options[0]}
              isSearchable={false}
            ></SelectField>
          </IModalFieldWrapper>

          <IModalFieldWrapper>
            <InputLabel>You will receive (overall thru project)</InputLabel>
            <OutputField>
              <div>240 000</div>
              <div className="BDL1">BDL1</div>
            </OutputField>
            <div className="bottomText">Project token</div>
          </IModalFieldWrapper>

          <IModalFieldWrapper>
            <InputLabel>You will receive</InputLabel>
            <OutputField>
              <div className="first">300</div>
              <div className="voting1">approx.</div>
              <div className="voting2">15 %</div>
            </OutputField>
            <div className="bottomText">DAO token. Project voting power</div>
          </IModalFieldWrapper>
        </IModalInputSectionWrapper>
        <IModalFormConfirmSection>
          <CheckboxContainer>
            <Checkbox type="checkbox"></Checkbox>
            <CheckboxLabel>
              {" "}
              <a>Please read and agree to terms and conditions</a>
            </CheckboxLabel>
          </CheckboxContainer>
          <ProceedButton>
            Proceed to MetaMask
            <span className="material-icons arrow">trending_flat</span>
          </ProceedButton>
        </IModalFormConfirmSection>
        <Accordion items={items} />
      </IModalForm>
    </IModalWrapper>
  );
};

export default InvestModal;
