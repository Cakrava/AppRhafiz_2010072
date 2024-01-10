import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([
    {id: 1, text: 'Hi Sayang', fromMe: false},
    {id: 2, text: 'Iya sayang', fromMe: true},
    {id: 3, text: 'How are you?', fromMe: false},
    {id: 4, text: "I'm good, thanks!", fromMe: true},
    // Add more fake messages as needed
  ]);

  const handleSend = () => {
    if (message.trim() === '') {
      return;
    }

    setMessages([
      ...messages,
      {id: messages.length + 1, text: message, fromMe: true},
    ]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.messageContainer,
              item.fromMe ? styles.fromMe : styles.fromOther,
            ]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d6a6e',
    padding: 16,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  fromMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#057a73', // Turquoise color
  },
  fromOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#4d4f4f', // Light Blue color
  },
  messageText: {
    fontSize: 16,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#057a73',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
