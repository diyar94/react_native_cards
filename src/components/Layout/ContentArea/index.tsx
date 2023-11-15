import React, {ReactNode} from 'react';
import {View} from 'react-native';

interface ContentAreaProps {
  children: ReactNode;
}

const ContentArea = (props: ContentAreaProps) => <View>{props.children}</View>;

export default ContentArea;
