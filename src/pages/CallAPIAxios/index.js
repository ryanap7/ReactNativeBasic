import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Axios from 'axios';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    Axios.get('https://reqres.in/api/users/2')
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('Error: ', err));
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    Axios.post('https://reqres.in/api/users', dataForAPI)
      .then((result) => {
        setDataJob(result.data);
      })
      .catch((err) => console.log('Error: ', err));
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Call API dengan Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text style={styles.text}>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text style={styles.text}>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    marginTop: 10,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
