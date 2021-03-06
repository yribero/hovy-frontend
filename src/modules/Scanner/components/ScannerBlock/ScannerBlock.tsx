import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {BarcodeMask} from '@nartc/react-native-barcode-mask';

import {useTheme} from '../../../../modules/Theme/hooks/useTheme';
import Text from '../../../../components/ui/Text';
import SafeContainer from '../../../../components/ui/SafeContainer';
import PageContainer from '../../../../components/common/PageContainer';
import {useScannerBlock} from '../../hooks/useScannerBlock';

import QrCodeIconSvg from '../../../../assets/images/icons/qr-code.svg';

const ScannerBlock: React.FC = () => {
  const {theme} = useTheme();
  const {isError, canShowCamera, handleScan} = useScannerBlock();

  return (
    <View
      style={[
        styles.cameraPlaceholder,
        {backgroundColor: theme.colors.constBlack},
      ]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.constBlack}
      />
      {canShowCamera && (
        <RNCamera
          style={styles.camera}
          onBarCodeRead={handleScan}
          captureAudio={false}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}>
          <BarcodeMask
            width={260}
            height={260}
            edgeWidth={25}
            edgeHeight={25}
            edgeRadius={theme.radii.md}
            backgroundColor="#000000"
            maskOpacity={0.7}
            animatedComponent={() => (
              <QrCodeIconSvg
                width={theme.fonts.sizes.s5}
                height={theme.fonts.sizes.s5}
                fill={theme.colors.constWhite}
              />
            )}
          />
          <SafeContainer style={[styles.container, {bottom: theme.layout.s5}]}>
            <PageContainer>
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: theme.colors.constWhite,
                      marginBottom: theme.layout.s3,
                    },
                  ]}
                  type="title">
                  Scan QR-code
                </Text>
                <Text
                  style={[
                    styles.text,
                    !isError && {color: theme.colors.constWhite},
                    {fontFamily: theme.fonts.families.primary.semibold},
                  ]}
                  colorType={isError ? 'error' : 'primary'}>
                  {isError
                    ? 'Error scanning QR-code. Try again.'
                    : 'QR-code can be found on the entrance to the venue.'}
                </Text>
              </View>
            </PageContainer>
          </SafeContainer>
        </RNCamera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  cameraPlaceholder: {
    flex: 1,
  },
});

export default ScannerBlock;
