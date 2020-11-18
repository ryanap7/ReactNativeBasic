import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIVanilla = () => {
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
  useEffect(() => {
    //   Call API Method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    //   Call API Method POST
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('POST response: ', json);
    //   });
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('POST response: ', json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Call API dengan Vanilla JS</Text>
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

export default CallAPIVanilla;

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
