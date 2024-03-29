import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  IModalHeader,
  IModalWrapper,
  CloseButton,
  LogoWrapper,
  IModalForm,
  IModalInputSectionWrapper,
  IModalFieldWrapper,
  InputField,
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
import infoBubble from "../../../public/info_bubble.svg";
import infoBubbleWhite from "../../../public/info_bubble_white.svg";
import BuidlLogo from "../../../public/BuidlLogo.png";
import Accordion from "../accordion";
import { InlineWrapper } from "../timelineBlock/styled";
import Tooltip from "../tooltip";
import React, { useContext, useEffect, useState, KeyboardEvent } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { Currency, mainnetCurrencies } from "../../constants/currencies";
import Web3Context from "../../context/web3Context";
import { getTokenBalance } from "../../web3/getTokenBalance";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { invest } from "../../web3/invest";
import { BigNumber, ethers } from "ethers";
import UserInvesmentHistory from "../userInvestmentHistory";
import CalculatedInvestValues from "../calculatedInvestValues";
import InvestorValuesContext from "../../context/investorContext";


const items = [
  {
    name: "Investment details",
    content: <UserInvesmentHistory />,
  },
];

export interface InputTypes {
  amount: string;
  checkbox: boolean;
}

interface IInvest {
  onClose(): void;
  setIsShownInvest?: any;
  setIsShownWrong?: any;
}

interface ICurrency {
  label: string;
  address: string;
  decimals: number;
}

const InvestModal = ({
  onClose,
  setIsShownInvest,
  setIsShownWrong,
}: IInvest) => {
  const {
    fundraisingStartDate,
    fundraisingEndDate,
    currency,
    setTotalInvested,
    hardCap,
    totalInvested,
    tokenCurrency,
  } = useContext(LoadedValuesContext);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<InputTypes>({
    mode: "onChange",
  });

  const [buttonState, setButtonState] = useState(false);
  const [options, setOptions] = useState<Currency[]>([currency]);
  const [selectedCurrency, setSelectedCurrency] = useState<ICurrency>({
    label: currency.label,
    address: currency.address,
    decimals: currency.decimals,
  });

  const { web3Provider, address, chainId, provider } = useContext(Web3Context);
  const [balance, setBalance] = useState<string>("0");
  const [network, setNetwork] = useState<string | undefined>(undefined);
  const [networkError, setNetworkError] = useState<string | undefined>(
    undefined
  );
  const [over, setOver] = useState(0);
  const {
    setInvestorValues,
    investorValues: { projectInvestments },
  } = useContext(InvestorValuesContext);

  const handleCurrencyChange = (selectedOption: any) => {
    setSelectedCurrency({
      label: selectedOption.label,
      address: selectedOption.address,
      decimals: selectedOption.decimals,
    });
  };

  useEffect(() => {
    if (web3Provider && chainId) {
      if (chainId === 1) {
        setOptions(mainnetCurrencies);
        setNetwork("Ethereum Mainnet");
        setNetworkError("Please connect to Goerli Testnet");
        setSelectedCurrency({
          label: mainnetCurrencies[0].label,
          address: mainnetCurrencies[0].address,
          decimals: mainnetCurrencies[0].decimals,
        });
      } else if (chainId === 5) {
        setOptions([currency]);
        setNetwork("Goerli Testnet");
        setNetworkError("");
        setSelectedCurrency({
          label: currency.label,
          address: currency.address,
          decimals: currency.decimals,
        });
      } else {
        setNetworkError("Please connect to Goerli Testnet");
      }
    }
  }, [chainId]);

  useEffect(() => {
    if (selectedCurrency?.address) {
      getTokenBalance(selectedCurrency.address, web3Provider, address).then(
        (data) => {
          if (data) {
            setBalance(data);
          } else {
            setBalance("0");
          }
        }
      );
    }
  }, [selectedCurrency]);

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClose();
  };

  const handleSetAmount = () => {
    setValue("amount", balance);
    trigger("amount");
  };

  const updateInvestorValuesLocally = (amount: string) => {
    setInvestorValues &&
      setInvestorValues((prevState: any) => {
        const currentValue = ethers.utils.parseEther(
          prevState.projectInvestments?.totalInvestedAmount || "0"
        );
        const amountBN = ethers.utils.parseEther(amount);
        const newValue = ethers.utils.formatEther(currentValue.add(amountBN));
        return {
          ...prevState,
          projectInvestments: {
            ...prevState.projectInvestments,
            totalInvestedAmount: newValue,
          },
        };
      });
  };

  const submitForm = async (data: InputTypes) => {
    const amount = getValues("amount");

    if (address) {
      setButtonState(true);
      const result = await invest(
        selectedCurrency.address,
        web3Provider,
        amount,
        address,
        provider,
        tokenCurrency
      );
      result && setTotalInvested && setTotalInvested(result);

      // updateInvestorValuesLocally(amount);

      if (result !== undefined) {
        setIsShownInvest(true);
        onClose();
      } else if (result == undefined) {
        setIsShownWrong(true);
        onClose();
      }

      getTokenBalance(selectedCurrency.address, web3Provider, address).then(
        (data) => {
          if (data) {
            setBalance(data);
          } else {
            setBalance("0");
          }
        }
      );
      setButtonState(false);
    }
  };

  let domNode: any = useClickOutside(() => {
    onClose();
  });

  const handleAmountChange = (value: string) => {
    if (value !== "0" && value !== "") {
      try {
        BigNumber.from(ethers.utils.parseEther(value));
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    return true;
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.target.value.charAt(0) == "0" && e.target.value.length == 20)
      e.preventDefault();
  };

  const isGoerli = () => {
    return chainId === 5;
  };

  return (
    <IModalWrapper ref={domNode}>
      <IModalHeader>
        <LogoWrapper>
          <Image
            className="logo"
            src={BuidlLogo}
            height={"25px"}
            width={"25px"}
          />
        </LogoWrapper>
        <a href="#" onClick={handleClose}>
          <CloseButton />
        </a>
      </IModalHeader>
      <IModalForm>
        <IModalInputSectionWrapper>
          <IModalFieldWrapper>
            <CurrencyInline>
              {errors.amount && <ErrorMsg>{errors.amount?.message}</ErrorMsg>}
              <InputLabel>Your investment</InputLabel>
              {!networkError && (
                <BalanceBtn className="bottomText">
                  Balance: {balance}
                  <MaxBalanceBtn onClick={handleSetAmount}>Max</MaxBalanceBtn>
                </BalanceBtn>
              )}
            </CurrencyInline>
            <InputField
              type="number"
              autoComplete="off"
              {...register("amount", {
                required: "This field is required",
                validate: {
                  network: isGoerli || "",
                  errorBN: (value) =>
                    handleAmountChange(value) || "Unable to invest below 1 WEI",
                  belowHardCap: (value) =>
                    BigNumber.from(ethers.utils.parseEther(value)).lt(
                      hardCap.sub(totalInvested)
                    ) || "Unable to invest above Hard Cap",
                  belowBalance: (value) =>
                    BigNumber.from(ethers.utils.parseEther(value)).lte(
                      BigNumber.from(ethers.utils.parseEther(balance))
                    ) || "Insufficient token balance",
                  positive: (value) =>
                    BigNumber.from(ethers.utils.parseEther(value)).gt(
                      BigNumber.from(0)
                    ) || "Invested amount must be greater than 0",
                },
              })}
              onKeyPress={handleKeyPress}
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

          <CalculatedInvestValues control={control} />
        </IModalInputSectionWrapper>

        <IModalFormConfirmSection>
          <ItemWrapper>
            <CheckboxContainer>
              {errors.checkbox && (
                <ErrorMsg>{errors.checkbox?.message}</ErrorMsg>
              )}
              <Checkbox
                type="checkbox"
                {...register("checkbox", {
                  required: "This field is required",
                  validate: (value) =>
                    value === true || "This field is required",
                })}
              />
              <CheckboxLabel>
                {" "}
                <a>Please read and agree to terms and conditions</a>
              </CheckboxLabel>
            </CheckboxContainer>
          </ItemWrapper>
          <ItemWrapper>
            {!buttonState ? (
              <ProceedButton
                onClick={handleSubmit(submitForm)}
                disabled={!isValid}
              >
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
                <div
                  onMouseOver={() => setOver(1)}
                  onMouseOut={() => setOver(0)}
                >
                  <Tooltip
                    text={
                      "You will be able to claim back your cash if Soft Cap is not reached during expected period"
                    }
                  >
                    <Image
                      src={over === 1 ? infoBubble : infoBubbleWhite}
                      alt="information"
                      height={"14px"}
                    />
                  </Tooltip>
                </div>
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
