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

            <View style={{ flexDirection: 'row' }}>
                <Text style={{width:"70%"}}>{props.datos.description}</Text>
                <Image style={styles.img}
                    source={{ uri: props.datos.image }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "rgba(228, 116, 25, 0.92)",
        margin: 7,

    },

    img: {
        width: 100,
        height: 300,
        resizeMode: 'center'

    }

})