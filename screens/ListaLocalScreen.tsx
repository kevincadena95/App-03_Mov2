import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import crash from '../assets/data/crash.json'
import Tarjeta from '../components/Tarjeta'


export default function ListaLocalScreen() {
    return (
        <View>
            <View style={styles.barra} />
            <Text>ListaLocalScreen</Text>
            <FlatList
                data={crash}
                renderItem={({ item }) =>
                    <Tarjeta datos={item} />
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    barra: {
        height: 70,
        backgroundColor: "#585858"
    }

})