import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getCountry } from '../redux/actions/countryActions'
import styles from '../styles/styles'

const { button, buttonText, textInput, pad } = styles

type Props = {
  getCountry: Function
  navigation: {navigate: Function}
}

const CountryForm = (props: Props) => {
  const [country, setCountry] = React.useState('')
  return (
    <View style={pad}>
      <TextInput style={textInput} placeholder='Enter country' onChangeText={(text: string) => setCountry(text)} value={country} />
      <TouchableOpacity style={button}  disabled={!country} onPress={() => props.getCountry(country, props.navigation.navigate)}><Text style={buttonText}>SUBMIT</Text></TouchableOpacity>
    </View>
  )
}

export default connect(null, { getCountry })(CountryForm)
