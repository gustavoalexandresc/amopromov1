import { useRef, useState } from "react";

import ChevronTopDefaultIcon from '../../../../assets/icons/chevron_top.png'
import ChevronDownDefaultIcon from '../../../../assets/icons/chevron_down.png'

import ChevronTopAltIcon from '../../../../assets/icons/chevron_top_alt.png'
import ChevronDownAltIcon from '../../../../assets/icons/chevron_down_alt.png'

import { Container, ContentBox, Title } from "./style";

export function Accordion({
  title,
  content,
  theme,
  children
}) {
  const [active, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const [iconRotate, setIconRotate] = useState(false);
  const contentRef = useRef(null);

  const ChevronTopIcon = theme === 'footer'
    ? ChevronTopAltIcon
    : ChevronTopDefaultIcon;

  const ChevronDownIcon = theme === 'footer'
    ? ChevronDownAltIcon
    : ChevronDownDefaultIcon;

  function toggleAccordion() {
    setContentHeight(
      active ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setIconRotate(!active);
    setActive(!active);
  }

  return (
    <Container theme={theme}>
      <Title onClick={toggleAccordion}>
        <p>{title}</p>
        <img src={iconRotate ? ChevronTopIcon : ChevronDownIcon} />
      </Title>
      <ContentBox ref={contentRef} contentHeight={contentHeight}>
        {children ?? (
          <p>
            {content}
          </p>
        )}
      </ContentBox>
    </Container>
  )
}