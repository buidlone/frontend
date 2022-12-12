import {
  AccordionButton,
  AccordionButtonIcon,
  AccordionSeparator,
  Content,
  Inner,
} from "./styled";

interface IAccordion {
  onClick: any;
  itemName: any;
  itemContent: any;
  isActive: boolean;
}
const AccordionContent = ({
  onClick,
  itemName,
  itemContent,
  isActive,
}: IAccordion) => {
  return (
    <>
      <AccordionButton isActive={isActive} onClick={onClick}>
        {itemName}
        <AccordionButtonIcon isActive={isActive} className="material-icons">
          expand_more
        </AccordionButtonIcon>
      </AccordionButton>
      <AccordionSeparator />
      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </>
  );
};

export default AccordionContent;
