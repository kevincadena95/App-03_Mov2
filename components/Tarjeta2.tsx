import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Alert, Modal, Button } from 'react-native'
import React, { useState } from 'react'


export default function Tarjeta(props: any) {

    const [ocultarModal, setocultarModal] = useState(false)



    return (
        <TouchableOpacity
            onPress={() => setocultarModal(!ocultarModal)}
            style={styles.container}>
            <Text >Nombre: {props.datos.name}</Text>

            <View style={{ flexDirection: 'row', }}>
                <Text style={{ width: "80%" }}> Especie: {props.datos.species}</Text>
                <Image style={styles.img}
                    source={{ uri: props.datos.image }} />
            </View>

            <Modal
                visible={ocultarModal}
                transparent
                
            >
                <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <Image
                    source={{uri: props.datos.image}}
                    style={styles.img2}
                    />

                    <Text>{props.datos.name}</Text>
                    <Text>{props.datos.status}</Text>

                    <Button
                        onPress={() => setocultarModal(!ocultarModal)}
                        title='cerrar' />
                </View>
                </View>

            </Modal>

        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "rgba(22, 173, 22, 0.92)",
        margin: 7,

    },

    img: {
        width: 50,
        height: 100,
        resizeMode: 'center'

    },

    img2: {
        width: 50,
        height: 100,
        resizeMode: 'contain'

    },

    modalContainer: {
        backgroundColor: "#3161c7",
        width: "80%",
        alignSelf: 'center',
        flex:1,
        height:100,
        borderRadius: 20,
        padding: 50

    },

  modal: {
    backgroundColor: '#665',
    flex: 1,
    justifyContent: 'center'
  }

})