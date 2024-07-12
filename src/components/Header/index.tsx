import React from 'react';

import { Logo } from '@/assets';
import {
  CartContainer,
  IconContainer,
  RedPoint,
  SafeContainer,
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
      <Logo width={'150px'} />
      <CartContainer>
        <IconContainer>{RightIcon ?? <></>}</IconContainer>
        {RightIcon && productsChosen.length > 0 && <RedPoint />}
      </CartContainer>
    </SafeContainer>
  );
}

export { Header };
