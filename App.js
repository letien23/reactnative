/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const FirstScreen = () => {
  const [direction, setDirection] = useState('flex-start');

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={['flex-start', 'flex-end']}
      setSelectedValue={setDirection}>
      <View style={[styles.box, {backgroundColor: '#EE2C38'}]} />
      <View style={[styles.box, {backgroundColor: '#FAA030'}]} />
      <View style={[styles.box, {backgroundColor: '#32B76C'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        {alignItems: selectedValue},
      ]}>
      {children}
    </View>
  </View>
);


function SecondScreen() {
  const [position, setPosition] = useState('relative');
  const values = ['relative', 'absolute'];

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setPosition(value)}
            style={[styles.button, position === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                position === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            {
              top: 25,
              left: 25,
              position,
              backgroundColor: '#EE2C38',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 50,
              left: 50,
              position,
              backgroundColor: '#FAA030',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 75,
              left: 75,
              position,
              backgroundColor: '#32B76C',
            },
          ]}
        />
      </View>
    </View>
  );
}

function ThirdScreen() {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  return (
    <PreviewLayout3
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ]}
      setSelectedValue={setJustifyContent}
    >
      <View
        style={[styles.box, { backgroundColor: "#EE2C38" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "#FAA030" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "#32B76C" }]}
      />
    </PreviewLayout3>
  );
}
const PreviewLayout3 = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="direction" component={FirstScreen} />
      <Tab.Screen name="position" component={SecondScreen} />
      <Tab.Screen name="justifyContene" component={ThirdScreen} />
    </Tab.Navigator>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'grey',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}