import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Agenda } from "react-native-calendars";
import { WebBrowser } from "expo";

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      cargado: 1
    };
  }

  static navigationOptions = {
    title: "Calendario",
    headerStyle: {
      backgroundColor: "#0081C4",
      borderBottomColor: "white",
      borderBottomWidth: 3
    },
    headerTitleStyle: {
      color: "white"
    },
    backButton: {
      color: "white"
    }
  };

  componentDidMount() {
    // http://axonplataforma.com.ar/leccion_json.php
    fetch("http://axonplataforma.com.ar/leccion_json.php")
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);//prueba
        this.setState({
          items: responseJson
        });
      });
    //console.log(this.state.items);
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        // loadItemsForMonth={this.loadItems.bind(this)}
        selected={"2019-02-16"}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        theme={{ agendaKnobColor: "#1E90FF" }}
        // renderDay={(day, item) => (<Text>{day ? <Text style={{color:'red'}}>{day.day}</Text>: 'item'}</Text>)}
      />
    );
  }

  // loadItems(day) {
  //   //no se esta usando
  //   setTimeout(() => {
  //     for (let i = -1; i < 1; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = this.timeToString(time);
  //       if (!this.state.items[strTime]) {
  //         this.state.items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 5);
  //         for (let j = 0; j < numItems; j++) {
  //           this.state.items[strTime].push({
  //             name: <Text style={{backgroundColor:'red',color:'white'}}>Name </Text>,
  //             height: 80,
  //             text: <Text style={{backgroundColor:'blue',color:'white'}}>lucas </Text>,
  //           });
  //         }
  //       }
  //     }
  //     //console.log(this.state.items);
  //     const newItems = {};
  //     Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
  //     this.setState({
  //       items: newItems
  //     });
  //   }, 1000);
  //   // console.log(this.state.items);
  // }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text>
          <Text style={{ color: "red" }}>{item.hinicio}</Text>- {item.nombre}
        </Text>
        <Text style={{ fontStyle: "italic" }}>{item.profesor}</Text>
        {item.link !== null ? (
          <Button
            title="Ver"
            onPress={() => {
              this.props.navigation.navigate("Clase");
            }}
          />
        ) : (
          <Text />
        )}
      </View>
    );
  }
  //http://www.axonplataforma.com.ar/vimeo.php?id=MTIzMTE=

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>Hoy no hay ninguna clase para ti!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

/*

{
    "2019-02-13": [
        {
            "name": "Apoyo Académico (Lección 1 a 5)",
            "hinicio": "19:00:00"
        }
    ],
    "2019-02-14": [
        {
            "name": "Apoyo Académico (Lección 6 a 10)",
            "hinicio": "20:00:00"
        }
    ],
    "2019-02-15": [
        {
            "name": "Clase de Bienvenida",
            "hinicio": "15:00:00"
        }
    ],
    "2019-02-16": [
        {
            "name": "Apoyo Académico (Lección 11 a 20)",
            "hinicio": "12:00:00"
        }
    ],
    "2019-02-18": [
        {
            "name": "Apoyo Académico (Lección 1 a 5)",
            "hinicio": "15:00:00"
        }
    ]
}

*/
