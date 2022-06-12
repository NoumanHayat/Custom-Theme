import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme} from '../hooks/';
import {Block, Button, Input, Image, Switch, Modal, Text} from '../components/';

// texts example
const Typography = () => {
  const {sizes} = useTheme();

  return (
    <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
      <Text p semibold marginBottom={sizes.s}>
        Typography
      </Text>
      <Block>
        <Text h1>Heading 1</Text>
        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>
        <Text h5>Heading 5</Text>
        <Text p>Paragraph</Text>
        <Text marginBottom={sizes.xs}>Text</Text>
      </Block>
    </Block>
  );
};

// switch example
const Switches = () => {
  const {colors, sizes} = useTheme();
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);

  return (
    <Block
      color={colors.card}
      paddingVertical={sizes.m}
      paddingHorizontal={sizes.padding}>
      <Text p semibold marginBottom={sizes.s}>
        Switches
      </Text>
      <Block>
        <Block row flex={0} align="center" justify="space-between">
          <Text>Switch is {switch1 ? 'ON' : 'OFF'}</Text>
          <Switch
            checked={switch1}
            onPress={(checked) => setSwitch1(checked)}
          />
        </Block>
        <Block
          row
          flex={0}
          align="center"
          justify="space-between"
          marginTop={sizes.s}>
          <Text>Switch is {switch2 ? 'ON' : 'OFF'}</Text>
          <Switch
            checked={switch2}
            onPress={(checked) => setSwitch2(checked)}
          />
        </Block>
      </Block>
    </Block>
  );
};

// social example
const Social = () => {
  const {sizes} = useTheme();

  return (
    <Block paddingVertical={sizes.m} paddingHorizontal={sizes.padding}>
      <Text p semibold marginBottom={sizes.s}>
        Social
      </Text>
      <Block row justify="space-evenly">
        <Button social="facebook" />
        <Button social="twitter" />
        <Button social="dribbble" />
      </Block>
    </Block>
  );
};

// cards example

// Photo gallery example
const Gallery = () => {
  const {assets, sizes} = useTheme();
  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;

  return (
    <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
      <Text p semibold marginBottom={sizes.s}>
        Carousel
      </Text>
      {/* carousel example */}
      <Block marginBottom={sizes.xxl}>
        <Image
          resizeMode="cover"
          source={assets.carousel1}
          style={{width: '100%'}}
        />
        <Text p secondary marginTop={sizes.sm}>
          Private Room • 1 Guests • 1 Sofa
        </Text>
        <Text h4 marginVertical={sizes.s}>
          Single room in center
        </Text>
        <Text p lineHeight={26}>
          As Uber works through a huge amount of internal management turmoil,
          the company is also consolidating.
        </Text>
      </Block>
      {/* photo gallery */}
      <Block>
        <Block row align="center" justify="space-between">
          <Text h5 semibold>
            Album 1
          </Text>
          <Button>
            <Text p primary semibold>
              View all
            </Text>
          </Button>
        </Block>
        <Block row justify="space-between" wrap="wrap">
          <Image
            resizeMode="cover"
            source={assets?.photo1}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
          <Image
            resizeMode="cover"
            source={assets?.photo2}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
          <Image
            resizeMode="cover"
            source={assets?.photo3}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
          <Image
            resizeMode="cover"
            source={assets?.photo4}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
          <Image
            resizeMode="cover"
            source={assets?.photo5}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
          <Image
            resizeMode="cover"
            source={assets?.photo6}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
        </Block>
      </Block>

      {/* vertical image */}
      <Block>
        <Block row align="center" justify="space-between">
          <Text h5 semibold>
            Album 2
          </Text>
          <Button>
            <Text p primary semibold>
              View all
            </Text>
          </Button>
        </Block>
        <Block row justify="space-between" wrap="wrap">
          <Image
            resizeMode="cover"
            source={assets?.photo1}
            style={{
              width: IMAGE_VERTICAL_SIZE + IMAGE_MARGIN / 2,
              height: IMAGE_VERTICAL_SIZE * 2 + IMAGE_VERTICAL_MARGIN,
            }}
          />
          <Block marginLeft={sizes.m}>
            <Image
              resizeMode="cover"
              source={assets?.photo2}
              marginBottom={IMAGE_VERTICAL_MARGIN}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
            <Image
              resizeMode="cover"
              source={assets?.photo3}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const Components = (props) => {
  const {assets, sizes} = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <Image
          radius={0}
          resizeMode="cover"
          width={sizes.width}
          height={headerHeight}
          source={assets.header}
        />
      ),
    });
  }, [assets.header, navigation, sizes.width, headerHeight]);

  return (
    <Block safe>
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Block>
          <Typography />

          <Switches />
          <Social />

          <Gallery />
        </Block>
      </Block>
    </Block>
  );
};

export default Components;
