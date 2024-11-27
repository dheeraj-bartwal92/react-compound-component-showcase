import React, {createContext, useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ISwitchContext {
  isChecked: boolean;
  toggle: () => void;
}
const SwitchContext = createContext<ISwitchContext | null>(null);

interface ISwitch {
  children: React.ReactNode;
  check?: boolean;
}

interface ISwitchComponent extends React.FC<ISwitch> {
  Label: React.FC<{children: React.ReactNode}>;
  Button: React.FC;
}

const Switch: ISwitchComponent = ({children, check = false}) => {
  const [isChecked, setIsChecked] = useState<boolean>(check);

  const toggle = () => {
    setIsChecked(pre => !pre);
  };

  return (
    <SwitchContext.Provider value={{isChecked, toggle}}>
      <View style={styles.container}>{children}</View>
    </SwitchContext.Provider>
  );
};

Switch.Label = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.label}>{children}</Text>;
};

Switch.Button = () => {
  const context = useContext(SwitchContext);

  if (!context) {
    throw new Error('Switch.Button must be used within a Switch component');
  }

  const {isChecked, toggle} = context;

  return (
    <TouchableOpacity style={styles.button} onPress={toggle}>
      <Text style={styles.buttonText}>{isChecked ? 'ON' : 'OFF'}</Text>
    </TouchableOpacity>
  );
};

export default Switch;
