import { useEffect, useState } from "react";
import AccordionContent from "../accordionContent";
import {
  AccordionBorder,
  AccordionContainer,
} from "../accordionContent/styled";

interface IAccordion {
  items: { name: string; content: any }[];
}
interface Size {
  width: number;
  height: number;
}

const Accordion = ({ items }: IAccordion) => {
  const [active, setActive] = useState<string | null>();
  const isOpen = active !== null && active !== undefined;

  // The size of the window
  const [size, setSize] = useState<Size>();

  // This function updates the state thus re-render the component
  const resizeHandler = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setSize({
      width: width,
      height: height,
    });
  };

  const handleClick = (name: string | null) => {
    setActive(name === active ? null : name);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    // Cleanup function
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <AccordionBorder isActive={isOpen ? true : false} />
      <AccordionContainer>
        {items.map((item, index) => {
          let isActive = active === item.name;
          return (
            <AccordionContent
              key={index}
              onClick={() => handleClick(item.name)}
              itemName={item.name}
              itemContent={item.content}
              isActive={isActive}
            />
          );
        })}
      </AccordionContainer>
    </>
  );
};

export default Accordion;
