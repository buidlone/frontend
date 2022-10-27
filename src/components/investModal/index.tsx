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
  CurrencyInline,
  BalanceBtn,
  MaxBalanceBtn,
} from "./styled";
import BuidlLogo from "../../../public/BuidlLogo.png";
import Accordion from "../accordion";
import TokenStreamTable from "../tokenStreamTable";
import { InfoIcon, InlineWrapper } from "../timelineBlock/styled";
import Tooltip from "../tooltip";
import React, { KeyboardEvent, useContext, useEffect, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { Currency, mainnetCurrencies } from "../../constants/currencies";
import Web3Context from "../../context/web3Context";
import { getTokenBalance } from "../../web3/getTokenBalance";
import { toast } from "react-toastify";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { invest } from "../../web3/invest";

const items = [
  {
    name: "Detailed project token stream",
    content: <TokenStreamTable />,
  },
];

const schema = yup.object().shape({
  checkbox: yup.bool().oneOf([true], "This field is required"),
  amount: yup
    .number()
    .positive("Invested amount must be greater than 0")
    .required("This field is required")
    .typeError("This field is required"),
});

interface InputTypes {
  amount: number;
  checkbox: boolean;
}

interface IInvest {
  onClose(): void;
}

interface ICurrency {
  label: string;
  address: string;
  decimals: number;
}

const InvestModal = ({ onClose }: IInvest) => {
  const {
    fundraisingStartDate,
    fundraisingEndDate,
    currency,
    setTotalInvested,
    hardCap,
  } = useContext(LoadedValuesContext);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm<InputTypes>({
    resolver: yupResolver(schema),
  });

  const [buttonState, setButtonState] = useState(false);
  const [options, setOptions] = useState<Currency[]>([currency]);
  const [receivedTokens, setReceivedTokens] = useState<number | undefined>(
    undefined
  );
  const [receivedDAO, setReceivedDAO] = useState<number | undefined>(undefined);
  const [votingPower, setVotingPower] = useState<number | undefined>(undefined);
  const [selectedCurrency, setSelectedCurrency] = useState<ICurrency>({
    label: currency.label,
    address: currency.address,
    decimals: currency.decimals,
  });

  const { web3Provider, address } = useContext(Web3Context);
  const [balance, setBalance] = useState<number>(0);
  const [network, setNetwork] = useState<string | undefined>(undefined);
  const [networkError, setNetworkError] = useState<string | undefined>(
    undefined
  );

  const handleCurrencyChange = (selectedOption: any) => {
    setSelectedCurrency({
      label: selectedOption.label,
      address: selectedOption.address,
      decimals: selectedOption.decimals,
    });
  };

  useEffect(() => {
    if (web3Provider) {
      if (web3Provider?.network.chainId === 1) {
        setOptions(mainnetCurrencies);
        setNetwork("Ethereum Mainnet");
        setSelectedCurrency({
          label: mainnetCurrencies[0].label,
          address: mainnetCurrencies[0].address,
          decimals: mainnetCurrencies[0].decimals,
        });
      } else if (web3Provider?.network.chainId === 5) {
        setOptions([currency]);
        setNetwork("Goerli Testnet");
        setSelectedCurrency({
          label: currency.label,
          address: currency.address,
          decimals: currency.decimals,
        });
      } else {
        setNetworkError("Please connect to Ethereum Mainnet or Goerli Tesnet");
        toast.error(
          `Please connect to Ethereum Mainnet or Goerli Testnet network`
        );
      }
    }
  }, []);

  useEffect(() => {
    if (selectedCurrency?.address) {
      getTokenBalance(
        selectedCurrency.address,
        web3Provider,
        address //comment for the test wallet to be checked and choose an address in the getTokenBalance.ts file
      ).then((data) => {
        if (data) {
          setBalance(data);
        } else {
          setBalance(0);
        }
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
      setReceivedTokens(24000);
      setReceivedDAO(300);
      setVotingPower(15);
    }
  };

  const handleSetAmount = () => {
    setValue("amount", balance);
    setReceivedTokens(24000);
    setReceivedDAO(300);
    setVotingPower(15);
  };

  const submitForm = async (data: InputTypes) => {
    const amount = getValues("amount");
    if (amount > balance) {
      setError("amount", { message: "Insufficient token balance" });
    } else if (amount > hardCap) {
      setError("amount", { message: "Unable to invest above Hard Cap" });
    } else {
      if (address) {
        setButtonState(true);
        const result = await invest(
          selectedCurrency.address,
          web3Provider,
          amount,
          address
        );
        result !== undefined &&
          setTotalInvested !== null &&
          setTotalInvested(result);
        getTokenBalance(
          selectedCurrency.address,
          web3Provider,
          address //comment for the test wallet to be checked and choose an address in the getTokenBalance.ts file
        ).then((data) => {
          if (data) {
            setBalance(data);
          } else {
            setBalance(0);
          }
        });
        setButtonState(false);
      }
    }
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
            <CurrencyInline>
              <ErrorMsg>{errors.amount?.message}</ErrorMsg>
              <InputLabel>Your investment</InputLabel>
              {!networkError && (
                <BalanceBtn className="bottomText">
                  Balance: {balance}
                  <MaxBalanceBtn onClick={handleSetAmount}>Max</MaxBalanceBtn>
                </BalanceBtn>
              )}
            </CurrencyInline>
            <InputField
              {...register("amount")}
              type="number"
              onKeyDown={handleKeyDown}
            />
            <CurrencyInline>
              {networkError ? (
                <div className="error">{networkError} </div>
              ) : (
                <div className="bottomText">{network}</div>
              )}
            </CurrencyInline>

            <SelectField
              options={options}
              value={selectedCurrency}
              classNamePrefix="react-select"
              isSearchable={false}
              onChange={handleCurrencyChange}
            />
          </IModalFieldWrapper>

          <IModalFieldWrapper>
            <InputLabel>You will receive (overall thru project)</InputLabel>
            <OutputField>
              <div>{receivedTokens?.toLocaleString().replace(/,/g, " ")}</div>
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
            {!buttonState ? (
              <ProceedButton onClick={handleSubmit(submitForm)}>
                Proceed to Metamask
                <span className="material-icons arrow">trending_flat</span>
              </ProceedButton>
            ) : (
              <ProceedButton onClick={handleSubmit(submitForm)}>
                Transactions in Progress
                <span className="wait" />
              </ProceedButton>
            )}
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
              <div className="dateNum">
                {fundraisingStartDate?.slice(0, 7)} -{" "}
                {fundraisingEndDate?.slice(0, 7)}{" "}
              </div>
            </BottomPartWrapper>
          </ItemWrapper>
        </IModalFormConfirmSection>

        <Accordion items={items} />
      </IModalForm>
    </IModalWrapper>
  );
};

export default InvestModal;
