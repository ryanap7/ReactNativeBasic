import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import Props from './pages/Props';
import State from './pages/State';
import Communication from './pages/Communication';
import SVG from './pages/SVG';
import Basic from './pages/Basic';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <Props /> */}
        {/* <State /> */}
        {/* <Communication /> */}
        {/* <SVG /> */}
        {/* <Basic /> */}
        {/* <CallAPIVanilla /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;
