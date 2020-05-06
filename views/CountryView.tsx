import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import { connect } from 'react-redux'
import { getWeather } from '../redux/actions/countryActions'
import styles from '../styles/styles'

const { button, buttonText, bold, pad } = styles

type Props = {
  country: {
    name: string
    capital: string
    population: string
    latlng: string[]
    flag: string
  }
  weather: {
    request: any
    location: any
    current: any
  }
  getWeather: Function
}

const CountryView = (props: Props) => {
  const [detail, setDetail] = React.useState(false)
  return (
    <View style={pad}>
      <View style={pad}>
        <SvgUri
          width="200"
          height="200"
          source={{ uri: props.country.flag }}
        />
        <Text><Text style={bold}>Capital: </Text>{props.country.capital}</Text>
        <Text><Text style={bold}>Population: </Text>{props.country.population}</Text>
        <Text><Text style={bold}>Co-Ordinates: </Text>{props.country.latlng[0] + ', ' + props.country.latlng[1]}</Text>
        <Text><Text style={bold}>Flag: </Text>{props.country.flag}</Text>
        <TouchableOpacity style={button} onPress={() => { props.getWeather(props.country.capital); setDetail(true) }}><Text style={buttonText}>Capital Weather</Text></TouchableOpacity>
      </View>
      {props.weather.location && detail &&
        <View style={pad}>
          <Text><Text style={bold}>City: </Text>{props.weather.location.name}</Text>
          <Text><Text style={bold}>Temperature: </Text>{props.weather.current.temperature} Celsius</Text>
          <Text><Text style={bold}>Wind Speed: </Text>{props.weather.current.wind_speed} m/s</Text>
          <Text style={bold}>Weather Icons: </Text>{props.weather.current.weather_icons.map((ico: string) =>
            <Image key={ico} source={{ uri: ico }} style={{ height: 20, width: 30 }} />
          )}
          <Text><Text style={bold}>Precipitation: </Text>{props.weather.current.precip} cm</Text>
        </View>}

    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    country: state.contry.country,
    weather: state.contry.weather
  }
}

export default connect(mapStateToProps, { getWeather })(CountryView)
