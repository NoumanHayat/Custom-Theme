import React, {useCallback, useEffect} from 'react';
import {Linking, StatusBar} from 'react-native';

import {useTheme, useTranslation, useData} from '../hooks/';
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
    <Block safe>
      <Block align="center" marginTop={sizes.sm}>
        <Image
            width={sizes.width * 0.8}
            height={sizes.width * 0.8}
            resizeMode="cover"
            padding={sizes.sm}
            paddingBottom={sizes.l}
            radius={360}
            source={assets.creater} />

      </Block>
    </Block>
  );
};

export default Pro;
