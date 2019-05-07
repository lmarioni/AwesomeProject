import RF from "react-native-responsive-fontsize";
import { Text, View, Animated, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Card, Icon, Button } from 'react-native-elements';
import RadioGroup,{Radio} from "react-native-radio-input";

export default class PracticaRepaso extends Component {
  constructor(props){
    super(props);
    this.state.titulo = "Bienvenido",
    this.state.step = 1,
    //this.state ={ isLoading: true},
    dataSource = []
  }
  state = {
    fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0,
    step: 1
  }
  async componentDidMount(){
    return fetch('https://api.axontraining.com/lecciones/evaluaciones/17')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          eleccion: 1
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("ENTRO "+this.state.eleccion);
  }
  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)"}}
      />
    );
  }
  renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>{data.item.id}</Text>
<Text style={styles.lightText}>{data.item.numero}</Text>
<Text style={styles.lightText}>{data.item.descripcion}</Text>
  {
    data.item.respuestas.map(evaluacion=>(
      <Text key={evaluacion.id} style={styles.lightText}>{evaluacion.opcionAbierta}</Text>
    ))
  }
</TouchableOpacity>
  static navigationOptions = {
    title: 'Práctica de repaso',
    headerStyle: {
      backgroundColor: '#C2092A',
      borderBottomColor: 'white',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      color: 'white'
    },
    backButton: {
      color: "white"
    },
    headerTintColor: "white"
  };
  mostrarTarjeta = (data, eleccion) => {
    if(!data){
      console.log("Está cargando");
    }else{
      switch(eleccion){
        case 1:
          return (
            <React.Fragment>
              <Text style={styles.paragraph}>Respondé las preguntas para saber cuánto aprendiste de la lección. Recordá que si salís de la evaluación antes de terminar todas las preguntas, tu progreso se guardará y lo podras seguir luego.</Text>
            </React.Fragment>
          )
        break;
        case 2:
            console.log(this.state.eleccion);
        break;
      }
      data.map(evaluacion=>(
        evaluacion.respuestas.map(respuesta=>(console.log(evaluacion)))
      ))
    }   
    /*switch (eleccion) {
      
      case 2:
        return (
          <React.Fragment>
            <Text style={styles.textoPreguntas}>¿Qué hay adentro del puntito?</Text>
            <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
              <Radio iconName={"lens"} label={"Lo que sé y nada más. (Por ejemplo, 'sé cocinar', 'sé lo que debería hacer mi jefe')"} value={"A"}/>
              <Radio iconName={"lens"} label={"Lo que sé y también lo que sé que no sé. (Por ejemplo, “sé cocinar, 'sé lo que debería hacer mi jefe', 'sé que no sé hablar chino', 'sé que no sé de programación informática')"} value={"B"}/>
              <Radio iconName={"lens"} label={"Todo lo que no sé que no sé. (Por ejemplo, 'lo desconocido')"} value={1}/>
            </RadioGroup>
          </React.Fragment>
        )
      case 3:
        return (
          <React.Fragment>
            <Text style={styles.textoPreguntas}>El concepto de "la caja" (lo que "no sé que no sé"), desde el Coaching ontológico es interpretado como:</Text>
            <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
              <Radio iconName={"lens"} label={'Es una mala noticia saber lo que no va a pasar, porque no tengo certezas y siempre hay que tener certezas. (Por ejemplo, "no voy a sumarme a este nuevo proyecto porque nunca hice algo parecido")'} value={"A"}/>
              <Radio iconName={"lens"} label={'Es un camino de incertidumbre, que no es ni buena ni mala noticia. Radica en cada uno cómo ve esa incertidumbre. (Por ejemplo, "como nunca lo hice no sé lo que va a pasar, voy a probar")'} value={"B"}/>
              <Radio iconName={"lens"} label={'Siempre debemos tener certezas, por lo que no es acertado elegir un camino de incertidumbre. (Por ejemplo, "cómo voy a realizar el siguiente proyecto si no tengo certezas de que va a funcionar")'} value={1}/>
            </RadioGroup>
          </React.Fragment>
        )
      case 4:
        return (
          <React.Fragment>
            <Text style={styles.textoPreguntas}>Tu mejor amigo te dice que tiene una nueva opción de empleo en la empresa que tanto deseaba, aunque está en duda de aceptarlo porque en su actual trabajo está cómodo. Si bien hay cosas que lo incomodan, estas incomodidades son las mismas de siempre. ¿Desde dónde está conversando?</Text>
            <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
              <Radio iconName={"lens"} label={'La incertidumbre de no saber lo que va a pasar, desde lo que "no sé que no sé".'} value={"A"}/>
              <Radio iconName={"lens"} label={'Desde adentro de su "puntito", donde se encuentra todo lo que "sé que sé" y lo "sé que no sé".'} value={"B"}/>
              <Radio iconName={"lens"} label={'Desde ninguna de las dos. Está hablando desde sus emociones.'} value={1}/>
            </RadioGroup>
          </React.Fragment>
        )
      case 5:
        return (
          <React.Fragment>
            <Text style={styles.textoPreguntas}>Una persona de 60 años de edad comparte la siguiente conversación contigo: - …"no puedo aprender Coaching en forma virtual dado que ya estoy grande y no sé usar la computadora"… Estamos frente a un Enemigo del Aprendizaje. ¿Cuál es?</Text>
            <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
              <Radio iconName={"lens"} label={'No puedo aprender dado mi falta de tiempo.'} value={"A"}/>
              <Radio iconName={"lens"} label={'Querer tener todo claro, todo el tiempo.'} value={"B"}/>
              <Radio iconName={"lens"} label={'No puedo aprender dado que soy así.'} value={1}/>
            </RadioGroup>
          </React.Fragment>
        );
      case 6:
        return (
          <React.Fragment>
            <Text style={styles.textoPreguntas}>Una persona que está haciendo un curso rápido de cocina te comparte la siguiente conversación: - …"Estoy muy ocupado para desarrollar nuevas capacidades a largo plazo, ya no sé de dónde sacar más tiempo para hacer lo que me gusta. Prefiero los cursos cortos"… Estamos frente a un Enemigo del Aprendizaje. ¿Cuál es?</Text>
            <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
              <Radio iconName={"lens"} label={'No puedo aprender dado que soy así.'} value={"A"}/>
              <Radio iconName={"lens"} label={'No puedo aprender dado mi falta de tiempo.'} value={"B"}/>
              <Radio iconName={"lens"} label={'Incapacidad de declarar ignorancia.'} value={1}/>
            </RadioGroup>
          </React.Fragment>
        );
      case 7:
        return (
          <React.Fragment>
            <Text style={styles.textoPreguntas}>Una persona te comparte la siguiente conversación: - …"Vivo permanentemente informado. Necesito tener información para sostener mi imagen de persona actualizada"… Estamos frente a un Enemigo del Aprendizaje. ¿Cuál es?</Text>
            <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
              <Radio iconName={"lens"} label={'No dar autoridad a los demás para que te enseñen.'} value={"A"}/>
              <Radio iconName={"lens"} label={'No reconocer lo nuevo como nuevo.'} value={"B"}/>
              <Radio iconName={"lens"} label={'Adicción a las respuestas.'} value={1}/>
            </RadioGroup>
          </React.Fragment>
        );
        case 8:
          return (
            <React.Fragment>
              <Text style={styles.textoPreguntas}>Distinguiendo el "puntito" de esta Lección, un ejemplo de lo que sé que sé, podría ser:</Text>
              <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
                <Radio iconName={"lens"} label={'Yo sé que no sé hablar chino.'} value={"A"}/>
                <Radio iconName={"lens"} label={'Yo sé lo que deberían hacer los demás.'} value={"B"}/>
                <Radio iconName={"lens"} label={'Yo sé de Matemáticas.'} value={1}/>
              </RadioGroup>
            </React.Fragment>
          );
        case 9:
          return (
            <React.Fragment>
              <Text style={styles.textoPreguntas}>Distinguiendo el "puntito" de esta Lección, un ejemplo de lo que "no sé que no sé", podría ser:</Text>
              <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
                <Radio iconName={"lens"} label={'Yo sé que no sé cocinar.'} value={"A"}/>
                <Radio iconName={"lens"} label={'No sé qué va a ocurrir porque no tuve la experiencia.'} value={"B"}/>
                <Radio iconName={"lens"} label={'No sé de Ingeniería civil.'} value={1}/>
              </RadioGroup>
            </React.Fragment>
          );
          case 10:
            return (
              <React.Fragment>
                <Text style={styles.textoPreguntas}>¿Qué son los Enemigos del Aprendizaje?</Text>
                <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
                  <Radio iconName={"lens"} label={'Son aquellos elementos que permiten aprender.'} value={"A"}/>
                  <Radio iconName={"lens"} label={'Son aquellos oponentes internos/externos que me imposibilitan aprender.'} value={"B"}/>
                  <Radio iconName={"lens"} label={'Los Enemigos del Aprendizaje no existen.'} value={1}/>
                </RadioGroup>
              </React.Fragment>
            );
          case 11:
            return (
              <React.Fragment>
                <Text style={styles.textoPreguntas}>El "no tengo tiempo" es:</Text>
                <RadioGroup getChecked={this.getChecked} RadioStyle={{marginRight: 25}} labelStyle={{fontSize:14, padding: 5}}>
                  <Radio iconName={"lens"} label={'Una realidad que no puedes cambiar.'} value={"A"}/>
                  <Radio iconName={"lens"} label={'Un obstáculo que no permite hacer lo que quieres.'} value={"B"}/>
                  <Radio iconName={"lens"} label={'Una conversación interna que tienes contigo mismo.'} value={1}/>
                </RadioGroup>
              </React.Fragment>
            );
    }*/
  }
  prevStep = () => {
    this.setState({ step: this.state.step - 1 })
  }
  nextStep = () => {
    this.setState({ step: this.state.step + 1 })
  }
  _onPress = () => {
    switch (this.state.step) {
      case 1:
        this.setState({
          titulo: "Pregunta N° 1"
        });
        break;
      case 2:
        this.setState({
          titulo: "Pregunta N° 2"
        });
        break;
      case 3:
        this.setState({
          titulo: "Pregunta N° 3"
        });
        break;
      case 4:
        this.setState({
          titulo: "Pregunta N° 4"
        });
        break;
      case 5:
        this.setState({
          titulo: "Pregunta N° 5"
        });
        break;
      case 6:
        this.setState({
          titulo: "Pregunta N° 6"
        });
        break;
      case 7:
        this.setState({
          titulo: "Pregunta N° 7"
        });
        break;
      case 8:
        this.setState({
          titulo: "Pregunta N° 8"
        });
        break;
      case 9:
        this.setState({
          titulo: "Pregunta N° 9"
        });
        break;
      case 10:
        this.setState({
          titulo: "Pregunta N° 10"
        });
        break;
      case 12:
        this.setState({
          titulo: "Felicitaciones"
        });
        break;
    }
    // Animate the update
    Animated.spring(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();
    setTimeout(
      () => {
        this.nextStep();
        Animated.spring(                  // Animate over time
          this.state.fadeAnim,            // The animated value to drive
          {
            toValue: 1,                   // Animate to opacity: 1 (opaque)
            duration: 1000,              // Make it take a while
          }
        ).start()
      }, 1000)                       // Starts the animation
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
        {/*<FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
        />*/}
          <Card title={this.state.titulo} style={{flex: 1, flexDirection: "column", justifyContent: 'space-between'/* flex: 1,border: 2, width: "100%", height: "100%"*/}}>
            <Animated.View style={{/* ...this.props.style, flex: 1, width: "100%", height: "100%", opacity: fadeAnim, fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#34495e', flex: 1, alignItems: "center", flexDirection:"column", justifyContent: 'space-between'*/}}>
              {this.mostrarTarjeta(this.state.dataSource, 1)}
            </Animated.View>
          </Card>
          <View style={{alignItems: "center", justifyContent: 'center', flexDirection: 'row' }}>
            <Button icon={<Icon type='font-awesome' name='arrow-circle-left' color='#ffffff' />} backgroundColor='#0081C4' buttonStyle={{ borderRadius: 5, marginLeft: 5, marginRight: 5, marginBottom: 0, width: 150 }} title=' Anterior' onPress={this._onPress} />
            <Button icon={<Icon type='font-awesome' name='arrow-circle-right' color='#ffffff' />} backgroundColor='#0081C4' buttonStyle={{ borderRadius: 5, marginLeft: 5, marginRight: 5, marginBottom: 0, width: 150 }} title=' Siguiente' onPress={this._onPress} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  otherContentContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingLeft: 2,
    paddingRight: 2
},
  container: {
    /*flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch",
    backgroundColor: 'transparent',*/
    flex: 1,
    flexDirection: 'column',
    //flexDirection: 'row'
  },
  contentContainer: {
    backgroundColor: '#fff',
    width: "100%",
    height: "100%"
  },
  paragraph: {
    fontSize: RF(2.8),
    textAlign: 'left',
    fontWeight: '100',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    padding: 5/*,
    borderColor: '#d8d8d8',
    borderRadius: 5,
    borderWidth: 6,*/
  },
  textoPreguntas: {
    fontSize: RF(3),
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    width: "100%",
    marginTop: 2,
    marginBottom: 2,
    padding: 10,
  },
  textoRespuestas: {
    fontSize: RF(2.5),
    textAlign: 'left',
    fontWeight: '200',
    backgroundColor: 'transparent',
    width: "100%",
    marginTop: 2,
    marginBottom: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});