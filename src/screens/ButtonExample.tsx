import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme} from '../hooks/';
import {Block, Button, Input, Image, Switch, Modal, Text} from '../components/';
import {TouchableWithoutFeedback} from 'react-native';
// buttons example
const Buttons = (props) => {
  const natigation = props.prop.navigation;

  const [showModal, setModal] = useState(false);
  const [quantity, setQuantity] = useState('01');
  const {assets, colors, gradients, sizes} = useTheme();

  return (
    <Block  paddingHorizontal={sizes.padding}>
      <Text p semibold marginBottom={sizes.s}>
        Buttons
      </Text>
      <Block> 
        <Button
          flex={1}
          gradient={gradients.primary}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.primary} marginBottom={sizes.base} > <Text white bold transform="uppercase"> Title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            Primary
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.secondary}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.secondary} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            Secondary
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.info}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.info} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            info
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.success}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.success} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            success
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.warning}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.warning} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            warning
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.danger}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.danger} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            danger
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.light}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.light} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text bold transform="uppercase">
            light
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.dark}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.dark} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
            dark
          </Text>
        </Button>
        <Block row justify="space-between" marginBottom={sizes.base}>
          <Button
            flex={1}
            row
            gradient={gradients.dark}
            onPress={() => setModal(true)}>
            <Block
              row
              align="center"
              justify="space-between"
              paddingHorizontal={sizes.sm}>
              <Text white bold transform="uppercase" marginRight={sizes.sm}>
                {quantity}
              </Text>
              <Image
                source={assets.arrow}
                color={colors.white}
                transform={[{rotate: '90deg'}]}
              />
            </Block>
          </Button>
          <Button
            flex={1}
            gradient={gradients.dark}
            marginHorizontal={sizes.s}
            onPress={() => {
              alert(
                '<Button flex={1} gradient={gradients.dark} marginHorizontal={sizes.s} > <Text white bold transform="uppercase" marginHorizontal={sizes.s}> Delete</Text></Button>',
              );
            }}>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              Delete
            </Text>
          </Button>
          <Button
            gradient={gradients.dark}
            onPress={() => {
              alert(
                '<Button gradient={gradients.dark}> <Text white bold transform="uppercase" marginHorizontal={sizes.sm}> Save for later</Text></Button>',
              );
            }}>
            <Text white bold transform="uppercase" marginHorizontal={sizes.sm}>
              Save for later
            </Text>
          </Button>
        </Block>
        {/* ================================================================================================================ */}
        <Button
          flex={1}
          gradient={gradients.custom1}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom1} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
          custom1
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom2}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom2} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
          custom2
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom3}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom3} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
          custom3
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom4}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom4} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
          custom4
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom5}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom5} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
          custom5
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom6}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom6} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
          custom6
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom7}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom7} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
          custom7
          </Text>
        </Button>
        <Button
          flex={1}
          gradient={gradients.custom8}
          marginBottom={sizes.base}
          onPress={() => {
            alert(
              ' <Button flex={1} gradient={gradients.custom8} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
            );
          }}>
          <Text white bold transform="uppercase">
          custom8
          </Text>
        </Button>
        {/* ================================================================================================================ */}
      </Block>
      <Modal visible={showModal} onRequestClose={() => setModal(false)}>
        <FlatList
          keyExtractor={(index) => `${index}`}
          data={['01', '02', '03', '04', '05']}
          renderItem={({item}) => (
            <Button
              marginBottom={sizes.sm}
              onPress={() => {
                setQuantity(item);
                setModal(false);
              }}>
              <Text p white semibold transform="uppercase">
                {item}
              </Text>
            </Button>
          )}
        />
      </Modal>
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
          <Buttons prop={props} />
        </Block>
      </Block>
    </Block>
  );
};

export default Components;
