import { ScrollView, View, Text, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';
import { Icon, Button } from 'react-native-elements';
import styles from "./css/estilo";
export default class MaterialLectura extends Component {
    static navigationOptions = {
        title: 'Material de Lectura',
        headerStyle: {
          backgroundColor: '#C2092A',
          borderBottomColor: 'white',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          color: 'white'
        },
        backButton:{
          color: "white"
        },
        headerTintColor: "white"
    };
    render(){
        const {navigate} = this.props.navigation;
        const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <Text accessible={false} style={styles.subTittleColor}>Material de Lectura</Text>
                <Text accessible={false} style={styles.texto}><Text style={{ fontWeight: 'bold' }}>Queremos impulsarte a aprender mucho más</Text> que esta lección; por ello, te invitamos a descargar  el siguiente material complementario que encontrarás a continuación:
                </Text>
                <View style={styles.contenido}>
                    <Button buttonStyle={{backgroundColor:'#C2092A', borderRadius: 5, marginBottom: 10, width: "90%", marginLeft:"5%" }} title=' Video de Sir Ken Robinson: Cambios de Paradigmas en la educación' onPress={() => navigate('Video1', {})} />
                    {/*<Text accessible={false} style={styles.texto}>1.- Video de Sir Ken Robinson: Cambios de Paradigmas en la educación</Text>*/}
                </View>
                <View style={styles.contenido}>
                    <Button buttonStyle={{backgroundColor:'#C2092A', borderRadius: 5, width: "90%", marginLeft:"5%" }} title=' Paper: Aprendizaje Ontológico (Lectura Obligatoria)' onPress={() => navigate('Lectura', {})} />
                    {/*icon={<Icon type='font-awesome' name='file' color='#ffffff' />}*//*<Text accessible={false} style={styles.texto}>2.- Paper: Aprendizaje Ontológico (Lectura Obligatoria)</Text>*/}
                </View>
            </View>
        </ScrollView>
        )
    }
}