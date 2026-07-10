import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function Tarjeta(props: any) {

    //console.log(props.datos.id)

    function mensaje(titulo: string, mensaje: string){
        Alert.alert(titulo, mensaje)
    }

    return (
        <TouchableOpacity 
        onPress={()=> mensaje(props.datos.id, props.datos.description)}
        style={styles.container}>
            <Text >{props.datos.name}</Text>

            <View style={styles.fila}>
                <Text style={{width:"70%"}}>{props.datos.description}</Text>
                <Image style={styles.img}
                    source={{ uri: props.datos.image }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#ff8800",
        margin: 8,
        padding: 12,
        borderRadius: 12,
        elevation: 4,
    },

    fila: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5,
    },

    img: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        borderRadius: 10,
    },

})