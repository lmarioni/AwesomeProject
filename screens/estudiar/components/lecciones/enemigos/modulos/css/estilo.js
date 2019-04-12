import RF from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "stretch",
        backgroundColor: 'transparent',
        width: null,
        height: null,
    },
    contentContainer: {
        backgroundColor: '#fff',
        width: "100%",
        height: "100%"
    },
    otherContentContainer: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingLeft: 2,
        paddingRight: 2
    },
    subTittle: {
        fontSize: RF(4),
        textAlign: 'center',
        fontWeight: "bold",
        backgroundColor: '#fff'
    },
    subTittleColor: {
        paddingTop: 10,
        fontSize: RF(4),
        textAlign: 'center',
        color: "#005D82",
        fontWeight: "bold",
        backgroundColor: 'transparent'
    },
    texto: {
        fontSize: RF(2.8),
        textAlign: 'justify',
        fontWeight: '100',
        backgroundColor: '#fff',
        width: "100%",
        marginTop: 10,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 10,
        borderRadius: 0,
        padding: 10,
        borderWidth: 1,
        borderColor: '#d8d8d8',
    },
    fitImage: {
        borderRadius: 20,
    },
    fitImageWithSize: {
        height: 100,
        width: 30,
    },

    fitImage2: {
        borderRadius: 20,
        height: 150,
        width: 150,
        marginLeft: "25%"
    },
    fitImageWithSize2: {
        height: 100,
        width: 30,
    },
    textoPreguntas: {
        fontSize: RF(2.5),
        textAlign: 'center',
        fontWeight: '200',
        backgroundColor: 'transparent',
        width: "100%",
        marginTop: 2,
        marginBottom: 2,
        padding: 10,
    },
    textoRespuestas: {
        fontSize: RF(2.2),
        textAlign: 'justify',
        fontWeight: '200',
        backgroundColor: 'transparent',
        width: "100%",
        marginTop: 2,
        marginBottom: 2,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    card: {
        width: 320,
        height: 420,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: "#005D82",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        borderWidth: 4,
    },
    card1: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 6,
        borderColor: "#005D82",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    card2: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 6,
        borderColor: "#005D82",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
    },
    label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    orange: {
        width: 55,
        height: 55,
        borderWidth: 6,
        borderColor: '#005D82',
        borderWidth: 4,
        borderRadius: 55,
        marginTop: -15
    },
    green: {
        width: 75,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#005D82',
    },
    red: {
        width: 75,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#005D82',
    }
});

export default styles;