import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Alert, Modal, Button } from 'react-native'
import React, { useState } from 'react'


export default function Tarjeta(props: any) {

    const [ocultarModal, setocultarModal] = useState(false)



    return (
        <TouchableOpacity
            onPress={() => setocultarModal(!ocultarModal)}
            style={styles.container}>
            <Text >Nombre: {props.datos.name}</Text>

            <View style={styles.fila}>
                <Text style={{ width: "80%" }}> Especie: {props.datos.species}</Text>
                <Image style={styles.img}
                    source={{ uri: props.datos.image }} />
            </View>

            <Modal
                visible={ocultarModal}
                transparent
                
            >
                <Text >Filtrar a solo humanos</Text>
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
        backgroundColor: "#5ac45a",
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

    img2: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        borderRadius: 12,
        marginBottom: 10,
    },

    modalContainer: {
        backgroundColor: "white",
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 20,
        padding: 25,
        elevation: 8,
    },

    modal: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        flex: 1,
        justifyContent: "center",
    }

})