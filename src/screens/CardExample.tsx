import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme} from '../hooks/';
import {Block, Button, Input, Image, Switch, Modal, Text} from '../components/';
import {TouchableWithoutFeedback} from 'react-native';

// buttons example
const Card1 = (props) => {
  const {colors, gradients, icons, sizes} = useTheme();

  return (
    <TouchableWithoutFeedback onPress={() => alert('Under Process')}>
      <Block card padding={sizes.sm} marginTop={sizes.sm}>
        <Image
          height={170}
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
          }}
        />
        {/* article category */}

        {/* article description */}
        <Text
          h5
          bold
          size={13}
          marginTop={sizes.s}
          transform="uppercase"
          marginLeft={sizes.xs}
          gradient={gradients.primary}>
          Card 1
        </Text>
        <Text
          p
          marginTop={sizes.s}
          marginLeft={sizes.xs}
          marginBottom={sizes.sm}>
          Rather than worrying about switching offices every couple years.
        </Text>

        {/* user details */}

        <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
          <Image
            radius={sizes.s}
            width={sizes.xl}
            height={sizes.xl}
            source={{
              uri: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80",
            }}
            style={{backgroundColor: colors.white}}
          />
          <Block justify="center" marginLeft={sizes.s}>
            <Text p semibold>
              Devin Coldewey
            </Text>
            <Text p gray>
              Posted on 20 Jan 2020
            </Text>
          </Block>
        </Block>

        {/* location & rating */}
      </Block>
    </TouchableWithoutFeedback>
  );
};

const Card2 = (props) => {
  const {colors, gradients, icons, sizes} = useTheme();

  return (
    <TouchableWithoutFeedback onPress={() => alert('Under Process')}>
      <Block card padding={sizes.sm} marginTop={sizes.sm}>
        <Image
          height={170}
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
          }}
        />
        <Text
          h5
          bold
          size={13}
          marginTop={sizes.s}
          transform="uppercase"
          marginLeft={sizes.xs}
          gradient={gradients.primary}>
          Card 2
        </Text>
        <Text
          p
          marginTop={sizes.s}
          marginLeft={sizes.xs}
          marginBottom={sizes.sm}>
          The most beautiful and complex UI Kits built by Creative Tim.
        </Text>

        {/* location & rating */}

        <Block row align="center">
          <Image source={icons.location} marginRight={sizes.s} />
          <Text p size={12} semibold>
            {'Paris'}, {'France'}
          </Text>
          <Text p bold marginHorizontal={sizes.s}>
            •
          </Text>
          <Image source={icons.star} marginRight={sizes.s} />
          <Text p size={12} semibold>
            4.8/5
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};
const Card3 = (props) => {
  const {colors, gradients, icons, sizes} = useTheme();

  return (
    <TouchableWithoutFeedback onPress={() => alert('Under Process')}>
      <Block card white padding={0} marginTop={sizes.sm}>
        <Image
          background
          resizeMode="cover"
          radius={sizes.cardRadius}
          source={{
            uri: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
          }}>
          <Block color={colors.overlay} padding={sizes.padding}>
            <Text color={colors.matching} h4 white marginBottom={sizes.sm}>
              Office space means growth.
            </Text>
            <Text color={colors.matching} p white>
              Rather than worrying about switching offices every couple years,
              you can instead stay in the same location.
            </Text>
            {/* user details */}
            <Block row marginTop={sizes.xxl}>
              <Image
                radius={sizes.s}
                width={sizes.xl}
                height={sizes.xl}
                source={{
                  uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
                }}
                style={{backgroundColor: colors.white}}
              />
              <Block justify="center" marginLeft={sizes.s}>
                <Text color={colors.matching} p white semibold>
                  Mathew Glock
                </Text>
                <Text color={colors.matching} p white>
                  HR Manager
                </Text>
              </Block>
            </Block>
          </Block>
        </Image>
      </Block>
    </TouchableWithoutFeedback>
  );
};
const Cards = () => {
    const {assets, colors, gradients, sizes} = useTheme();
  
    return (
      <Block marginTop={sizes.sm}>
        
        {/* single card */}
        <Block>
          <Block card row>
            <Image
              resizeMode="contain"
              source={assets?.card1}
              style={{height: 114}}
            />
            <Block padding={sizes.s} justify="space-between">
              <Text p>Adventures - Multi day trips with meals and stays.</Text>
              <TouchableOpacity>
                <Block row align="center">
                  <Text p semibold marginRight={sizes.s} color={colors.link}>
                    Read Article
                  </Text>
                  <Image source={assets.arrow} color={colors.link} />
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
        {/* inline cards */}
        <Block row marginTop={sizes.sm}>
          <Block card marginRight={sizes.sm}>
            <Image
              resizeMode="cover"
              source={assets?.card2}
              style={{width: '100%'}}
            />
            <Block padding={sizes.s} justify="space-between">
              <Text p marginBottom={sizes.s}>
                New ways to meet your business goals.
              </Text>
              <TouchableOpacity>
                <Block row align="center">
                  <Text p semibold marginRight={sizes.s} color={colors.link}>
                    Read Article
                  </Text>
                  <Image source={assets.arrow} color={colors.link} />
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
          <Block card>
            <Image
              resizeMode="cover"
              source={assets?.card3}
              style={{width: '100%'}}
            />
            <Block padding={sizes.s} justify="space-between">
              <Text p marginBottom={sizes.s}>
                The highest status people.
              </Text>
              <TouchableOpacity>
                <Block row align="center">
                  <Text p semibold marginRight={sizes.s} color={colors.link}>
                    Read Article
                  </Text>
                  <Image source={assets.arrow} color={colors.link} />
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
        {/* full image width card */}
        <Block card marginTop={sizes.sm}>
          <Image
            resizeMode="cover"
            source={assets?.card4}
            style={{width: '100%'}}
          />
          <Text
            h5
            bold
            transform="uppercase"
            gradient={gradients.primary}
            marginTop={sizes.sm}>
            Trending
          </Text>
          <Text
            p
            marginTop={sizes.s}
            marginLeft={sizes.xs}
            marginBottom={sizes.sm}>
            The most beautiful and complex UI Kits built by Creative Tim.
          </Text>
          {/* user details */}
          <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
            <Image
              source={assets.avatar1}
              style={{width: sizes.xl, height: sizes.xl, borderRadius: sizes.s}}
            />
            <Block marginLeft={sizes.s}>
              <Text p semibold>
                Mathew Glock
              </Text>
              <Text p gray>
                Posted on 28 February
              </Text>
            </Block>
          </Block>
        </Block>
        {/* image background card */}
        <Block card padding={0} marginTop={sizes.sm}>
          <Image
            background
            resizeMode="cover"
            source={assets.card5}
            radius={sizes.cardRadius}>
            <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
              <Text h4 white marginBottom={sizes.sm}>
                Flexible office space means growth.
              </Text>
              <Text p white>
                Rather than worrying about switching offices every couple years,
                you can instead stay in the same location.
              </Text>
              {/* user details */}
              <Block row marginLeft={sizes.xs} marginTop={sizes.xxl}>
                <Image
                  source={assets.avatar2}
                  style={{
                    width: sizes.xl,
                    height: sizes.xl,
                    borderRadius: sizes.s,
                  }}
                />
                <Block marginLeft={sizes.s}>
                  <Text p white semibold>
                    Devin Coldewey
                  </Text>
                  <Text p white>
                    Marketing Manager
                  </Text>
                </Block>
              </Block>
            </Block>
          </Image>
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
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Block>
          <Card1 prop={props} />
          <Card2 prop={props} />
          <Card3 prop={props} />
          <Cards prop={props} />
        </Block>
      </Block>
    </Block>
  );
};

export default Components; 
