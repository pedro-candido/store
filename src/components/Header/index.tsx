import React from 'react';

import {
  CartContainer,
  IconContainer,
  RedPoint,
  SafeContainer,
  StyledLogo,
} from '@components/Header/Header.styles';
import { useStore } from '@store/globalStore';

interface IHeader {
  RightIcon?: React.ReactNode;
  LeftIcon?: React.ReactNode;
}

function Header({ RightIcon, LeftIcon }: IHeader) {
  const { productsChosen } = useStore();

  return (
    <SafeContainer>
      <IconContainer>{LeftIcon ?? <></>}</IconContainer>
      <StyledLogo />
      <CartContainer>
        <IconContainer>{RightIcon ?? <></>}</IconContainer>
        {RightIcon && productsChosen.length > 0 && <RedPoint />}
      </CartContainer>
    </SafeContainer>
  );
}

export { Header };
