import React, {useCallback, useEffect} from 'react';
import {Linking, StatusBar} from 'react-native';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';

const Pro = () => {
  const {t} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBarStyle('dark-content');
    };
  }, []);

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  return (
    <Image
      background
      source={assets.background}
      padding={sizes.padding}
      style={{flex: 1}}>
      <Block safe justify="center">
        <Block card flex={1} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text>This is message Screen</Text>
          <Button flex={0} gradient={gradients.secondary} marginTop={sizes.sm} marginBottom={sizes.base} onPress={()=>alert("This is message Screen")}>
          <Text white bold transform="uppercase">
            Primary
          </Text>
        </Button>
        </Block>
      </Block>
    </Image>
  );
};

export default Pro;
