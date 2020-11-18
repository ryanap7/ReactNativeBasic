import React, {Component, useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> Constructor');
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('==> ComponentDidMount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> ComponentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('==> ComponentWillUnmount');
//   }

//   render() {
//     console.log('==> Render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'grey',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: 'red', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={{uri: 'http://placeimg.com/640/480/arch'}}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Ryan Aprianto
//             </Text>
//             <Text>{this.state.subscriber} Subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('DidMount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return () => {
      console.log('DidUpdate');
    };
  }, [subscriber]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={{uri: 'http://placeimg.com/640/480/arch'}}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ryan Aprianto</Text>
          <Text>{subscriber} Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
