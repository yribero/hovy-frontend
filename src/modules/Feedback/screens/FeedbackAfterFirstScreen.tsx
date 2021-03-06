import React from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import KeyboardAvoidingContainer from '../../../components/ui/KeyboardAvoidingContainer';
import PageContainer from '../../../components/common/PageContainer';
import SafeScrollerContainer from '../../../components/common/SafeScrollerContainer';

import Button from '../../../components/ui/Button';
import Text from '../../../components/ui/Text';
import CompanyCard from '../../../components/ui/CompanyCard';
import MenuButton from '../../../components/common/MenuButton';
import HeartIconSvg from '../../../assets/images/icons/heart.svg';
import SmileFaceIconSvg from '../../../assets/images/icons/smile-face.svg';
import NeutralFaceIconSvg from '../../../assets/images/icons/neutral-face.svg';
import SadFaceIconSvg from '../../../assets/images/icons/sad-face.svg';
import {useTheme} from '../../Theme/hooks/useTheme';
import {RootState} from '../../../redux/store';
import {ShopDataType} from '../../Auth/reducer/authReducer';

const FeedbackAfterFirstScreen: React.FC = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const shopData = useSelector<RootState, ShopDataType | null>(
    (state) => state.authReducer.shopData
  );

  return (
    <KeyboardAvoidingContainer>
      <SafeScrollerContainer isFlex>
        <PageContainer>
          <View
            style={{
              paddingTop: theme.layout.s4,
            }}>
            {shopData && (
              <CompanyCard
                title={shopData.name}
                address={shopData.address}
                pictureUrl={shopData.pictureUrl}
                style={{marginBottom: theme.layout.s5}}
              />
            )}
            <Text
              type="title"
              style={{textAlign: 'center', marginBottom: theme.layout.s2}}>
              Thanks for your visit!
            </Text>
            <Text
              style={{
                fontFamily: theme.fonts.families.primary.semibold,
                textAlign: 'center',
                marginBottom: theme.layout.s5,
              }}>
              Please rate your experience.
            </Text>
            <Button
              title="Love it"
              iconLeft={<HeartIconSvg fill={theme.colors.textInverse} />}
              style={{marginBottom: theme.layout.s3}}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{name: 'FeedbackAfterSecond', params: {rating: 4}}],
                })
              }
            />
            <Button
              title="Good"
              iconLeft={<SmileFaceIconSvg fill={theme.colors.textInverse} />}
              style={{marginBottom: theme.layout.s3}}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{name: 'FeedbackAfterSecond', params: {rating: 3}}],
                })
              }
            />
            <Button
              title="Normal"
              iconLeft={<NeutralFaceIconSvg fill={theme.colors.textInverse} />}
              style={{marginBottom: theme.layout.s3}}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{name: 'FeedbackAfterSecond', params: {rating: 2}}],
                })
              }
            />
            <Button
              title="Bad"
              iconLeft={<SadFaceIconSvg fill={theme.colors.textInverse} />}
              style={{marginBottom: theme.layout.s3}}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{name: 'FeedbackAfterSecond', params: {rating: 1}}],
                })
              }
            />
          </View>
        </PageContainer>
      </SafeScrollerContainer>
      <MenuButton />
    </KeyboardAvoidingContainer>
  );
};

export default FeedbackAfterFirstScreen;
