import React from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, ImageBackground} from "react-native";
import { Feather } from "@expo/vector-icons"

const DATA = [
    {
        "dt": 1661875200,
        "main": {
        "temp_min": 296.34,
        "temp_max": 298.24,
        },
        "weather": [
        {
            "main": "Rain",
            "description": "light rain",
        }
        ]
    }, 
    {
        "dt": 1661878800,
        "main": {
          "temp_min": 296.2,
          "temp_max": 296.31,
        },
        "weather": [
          {
            "main": "Rain",
            "description": "light rain",
          }
        ]
    }, 
    {
        "dt": 1661882400,
        "main": {
          "temp_min": 292.84,
          "temp_max": 294.94,
        },
        "weather": [
          {
            "main": "Rain",
            "description": "light rain",
          }
        ]
    }
]

const WeatherItem  = (props) => {
    const {dt_txt, min, max, condition} = props
    return (
        <View style = {styles.weatherItem}>
            <Feather name='sun' size={50} color='white'/>
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {

    const renderItem = ({item}) => (
        <WeatherItem condition={item.weather[0].main} dt_txt = {item.dt} min={item.main.temp_min} max={item.main.temp_max}/>
    )

    return ( 
      <SafeAreaView style={styles.container}>
        <ImageBackground source = {require("../../assets/upcoming-bg.jpg")} style={styles.image}>
            <Text>UpcomingWeather</Text>
            <FlatList
                data = {DATA}
                renderItem = {renderItem}
                keyExtractor={item => item.dt}>
            </FlatList>
        </ImageBackground>
      </SafeAreaView> 
    ) 
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: 'royalblue'
    },
    weatherItem: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    image:{
        flex:1
    }
  })

export default UpcomingWeather