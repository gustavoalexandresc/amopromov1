import { useRef, useState } from "react";

import ChevronTopIcon from '../../../../assets/icons/chevron_top.png'
import ChevronDownIcon from '../../../../assets/icons/chevron_down.png'

import { Container, ContentBox, Title } from "./style";

export function Accordion({
  title,
  content,
}) {
  const [active, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const [iconRotate, setIconRotate] = useState(false);
  const contentRef = useRef(null);

  function toggleAccordion() {
    setContentHeight(
      active ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setIconRotate(!active);
    setActive(!active);
  }

  return (
    <Container>
      <Title onClick={toggleAccordion}>
        <p>{title}</p>
        <img src={iconRotate ? ChevronTopIcon : ChevronDownIcon} />
      </Title>
      <ContentBox ref={contentRef} contentHeight={contentHeight}>
        <p>
          {content}
        </p>
      </ContentBox>
    </Container>
  )
}