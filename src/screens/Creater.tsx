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
          width={sizes.width * 0.6}
          height={sizes.width * 0.6}
          resizeMode="cover"
          padding={sizes.sm}
          radius={360}
          source={assets.creater}
        />
      </Block>
      <Block padding={sizes.sm}>
        <Text align="center"  marginBottom={sizes.sm} h4>
          {t('creater.name')}
        </Text> 
        <Text semibold marginBottom={sizes.s} marginTop={sizes.sm}>{t('creater.introduction')}</Text>
        <Text semibold marginBottom={sizes.s} marginTop={sizes.sm}>{t('creater.introduction_2')}</Text>
        <Block padding={sizes.xl}>
          <Button gradient={gradients.primary} onPress={() =>alert("Under Process")}>
            <Text p color={colors.matching}>Context US</Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Pro;
