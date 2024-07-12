import React from 'react';

import { Logo } from '@/assets';
import { IconContainer, SafeContainer } from '@components/Header/Header.styles';

interface IHeader {
  RightIcon?: React.ReactNode;
  LeftIcon?: React.ReactNode;
}

function Header({ RightIcon, LeftIcon }: IHeader) {
  return (
    <SafeContainer>
      <IconContainer>{LeftIcon ?? <></>}</IconContainer>
      <Logo />
      <IconContainer>{RightIcon ?? <></>}</IconContainer>
    </SafeContainer>
  );
}

export { Header };
