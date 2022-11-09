import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Translator from './Components/Translator';
import { useEffect } from 'react/cjs/react.development';

export default function MainScreen() {
  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  useEffect(() => {
    fetchCopiedText();
  });

  return (
    <View style={styles.container}>
      {/* <Button
        title='Click here to copy to Clipboard'
        onPress={copyToClipboard}
      />
      <Button title='View copied text' onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text> */}
      <Translator sourceLang='Espanol' sourceText={copiedText}></Translator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
});
