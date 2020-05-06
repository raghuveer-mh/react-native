import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CountryForm from '../views/CountryForm'
import CountryView from '../views/CountryView'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'CountryForm'
          component = {CountryForm}
          options = {{
            title: 'Search Countries',
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name = 'CountryView'
          component = {CountryView}
          options = {{
            title: 'Country Details',
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
