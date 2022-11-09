import * as React from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';

export default function Translator({ sourceLang, sourceText }) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.languageHeader}>{sourceLang}</Text>
          </View>
          <View>
            <Text style={styles.translationContainer}>{sourceText}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={[styles.languageHeader, styles.purpleText]}>
              {'English'}
            </Text>
          </View>
          <View>
            <Text style={[styles.translationContainer, styles.purpleText]}>
              {
                'Hello World! app is in just testing Phase! I repeat in testing phase'
              }
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: -0.5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  textContainer: {
    padding: 8,
  },
  languageHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  translationContainer: {
    fontSize: 16,
    paddingVertical: 5,
  },
  purpleText: {
    color: '#9E04A2',
  },
  separator: {
    width: Dimensions.get('window').width / 4,
    height: 2,
    backgroundColor: '#80008024',
    borderRadius: 8,
  },
});
