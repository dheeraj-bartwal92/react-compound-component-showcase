import React, {FC, ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

interface ICard {
  children: React.ReactNode;
  style?: ViewStyle;
}

interface IHeader {
  children: ReactNode;
  style?: ViewStyle;
}

interface IFooter {
  children: ReactNode;
  style?: ViewStyle;
}

interface IContent {
  children: ReactNode;
  style?: ViewStyle;
}

interface ICardComponent extends React.FC<ICard> {
  Header: FC<IHeader>;
  Content: FC<IContent>;
  Footer: FC<IFooter>;
}

const Card: ICardComponent = ({children, style}) => {
  return <View style={[style]}>{children}</View>;
};

Card.Header = ({children, style}: IHeader) => {
  return <View style={[style]}>{children}</View>;
};

Card.Footer = ({children, style}: IFooter) => {
  return <View style={[style]}>{children}</View>;
};
Card.Content = ({children, style}: IContent) => {
  return <View style={[style]}>{children}</View>;
};

export default Card;
