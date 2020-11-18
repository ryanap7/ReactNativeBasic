import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Axios from 'axios';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: 'http://placeimg.com/640/480/people',
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    if (button === 'Simpan') {
      Axios.post('http://10.0.2.2:3004/users', data)
        .then((result) => {
          setName('');
          setEmail('');
          setBidang('');
          getData();
        })
        .catch((err) => console.log('Error: ', err));
    } else {
      Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
        .then((result) => {
          setName('');
          setEmail('');
          setBidang('');
          setButton('Simpan');
          getData();
        })
        .catch((err) => console.log('Error: ', err));
    }
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users')
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => console.log('Error: ', err));
  };

  const selectItem = (item) => {
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = (item) => {
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
      .then((result) => {
        getData();
      })
      .catch((err) => console.log('Error: ', err));
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setBidang('');
    setButton('Simpan');
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Local API ( JSON SERVER )</Text>
      <Text style={styles.text}>Masukkan Anggota Kabayan Coding</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onDelete
        onChangeText={(value) => setName(value)}></TextInput>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}></TextInput>
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}></TextInput>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title={button} onPress={submit} />
        <Button title="Clear" onPress={clearForm} />
      </View>
      <View style={styles.line} />
      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert('Warning', 'Are you sure?', [
                {
                  text: 'No',
                  onPress: () => getData(),
                },
                {
                  text: 'Yes',
                  onPress: () => deleteItem(user),
                },
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  text: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {
    marginLeft: 18,
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 16,
  },
  descBidang: {
    fontSize: 12,
    marginTop: 8,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
