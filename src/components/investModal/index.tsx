import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
  BottomPartWrapper,
  ItemWrapper,
  ErrorMsg,
} from "./styled";
import BuidlLogo from "../../../public/BuidlLogo.png";
import Accordion from "../accordion";
import TokenStreamTable from "../tokenStreamTable";
import { InfoIcon, InlineWrapper } from "../timelineBlock/styled";
import Tooltip from "../tooltip";
import React, { KeyboardEvent, useContext, useEffect, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import {
  Currency,
  goerliCurrencies,
  mainnetCurrencies,
} from "../../constants/currencies";
import Web3Context from "../../context/web3Context";

import { getTokenBalance } from "../../web3/getTokenBalance";
import { toast } from "react-toastify";

const items = [
  {
    name: "Detailed project token stream",
    content: <TokenStreamTable />,
  },
];

const schema = yup.object().shape({
  //amount: yup.number().positive().required("First Name should be required please"),
  checkbox: yup.bool().oneOf([true], "This field is required"),
});

interface InputTypes {
  amount?: number;
  checkbox: boolean;
}

interface IInvest {
  onClose(): void;
}

const InvestModal = ({ onClose }: IInvest) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>({
    resolver: yupResolver(schema),
  });

  const [options, setOptions] = useState<Currency[]>();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [receivedBDL1, setReceivedBDL1] = useState<number | undefined>(
    undefined
  );
  const [receivedDAO, setReceivedDAO] = useState<number | undefined>(undefined);
  const [votingPower, setVotingPower] = useState<number | undefined>(undefined);
  const [selectedCurrency, setSelectedCurrency] = useState({
    label: undefined,
    address: undefined,
    decimals: undefined,
  });

  const { web3Provider, address } = useContext(Web3Context);
  const [balance, setBalance] = useState<string>();

  const handleCurrencyChange = (selectedOption: any) => {
    setSelectedCurrency({
      label: selectedOption.label,
      address: selectedOption.address,
      decimals: selectedOption.decimals,
    });
  };

  useEffect(() => {
    if (web3Provider?.network.chainId === 1) {
      setOptions(mainnetCurrencies);
    } else if (web3Provider?.network.chainId === 5) {
      setOptions(goerliCurrencies);
    }
  }, []);

  useEffect(() => {
    if (selectedCurrency.address && selectedCurrency.decimals) {
      getTokenBalance(
        selectedCurrency.address,
        web3Provider,
        selectedCurrency.decimals
        //,address                  //uncomment for the currently connected wallet to be checked
      ).then((data) => {
        setBalance(data);
        toast.info(
          `Your current balance of ${selectedCurrency.label} is: ${data}`
        );
      });
    }
  }, [selectedCurrency]);

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setReceivedBDL1(24000);
      setReceivedDAO(300);
      setVotingPower(15);
    }
  };

  const submitForm = (data: InputTypes) => {
    console.log(data);
  };

  let domNode: any = useClickOutside(() => {
    onClose();
  });

  return (
    <IModalWrapper ref={domNode}>
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
            <InputField
              type="number"
              name="amount"
              placeholder=""
              value={amount}
              onChange={(e) => setAmount(e.target.valueAsNumber)}
              onKeyDown={handleKeyDown}
            />

            <div className="bottomText">Etherium network</div>
            <SelectField
              options={options}
              classNamePrefix="react-select"
              isSearchable={false}
              onChange={handleCurrencyChange}
            />
          </IModalFieldWrapper>

          <IModalFieldWrapper>
            <InputLabel>You will receive (overall thru project)</InputLabel>
            <OutputField>
              <div>{receivedBDL1?.toLocaleString().replace(/,/g, " ")}</div>
              <div className="BDL1">BDL1</div>
            </OutputField>
            <div className="bottomText">Project token</div>
          </IModalFieldWrapper>

          <IModalFieldWrapper>
            <InputLabel>You will receive</InputLabel>
            <OutputField>
              <div className="first">
                {receivedDAO?.toLocaleString().replace(/,/g, " ")}
              </div>
              <div className="voting1">approx.</div>
              <div className="voting2">
                {votingPower?.toLocaleString().replace(/,/g, " ")} %
              </div>
            </OutputField>
            <div className="bottomText">DAO token. Project voting power</div>
          </IModalFieldWrapper>
        </IModalInputSectionWrapper>

        <IModalFormConfirmSection>
          <ItemWrapper>
            <CheckboxContainer>
              <ErrorMsg>{errors.checkbox?.message}</ErrorMsg>
              <Checkbox type="checkbox" {...register("checkbox")} />
              <CheckboxLabel>
                {" "}
                <a>Please read and agree to terms and conditions</a>
              </CheckboxLabel>
            </CheckboxContainer>
          </ItemWrapper>
          <ItemWrapper>
            <ProceedButton onClick={handleSubmit(submitForm)}>
              Proceed to MetaMask
              <span className="material-icons arrow">trending_flat</span>
            </ProceedButton>
          </ItemWrapper>
          <ItemWrapper>
            <BottomPartWrapper>
              <InlineWrapper>
                <div className="period">Soft cap reservation period</div>
                <Tooltip
                  text={
                    "You will be able to claim back your cash if Soft Cap is not reached during expected period"
                  }
                >
                  <InfoIcon />
                </Tooltip>
              </InlineWrapper>
              <div className="dateNum">2022 01 - 2022 06</div>
            </BottomPartWrapper>
          </ItemWrapper>
        </IModalFormConfirmSection>

        <Accordion items={items} />
      </IModalForm>
    </IModalWrapper>
  );
};

export default InvestModal;
