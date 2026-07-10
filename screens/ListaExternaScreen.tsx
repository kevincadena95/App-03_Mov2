import { StyleSheet, Text, View, FlatList, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta2 from '../components/Tarjeta2'




export default function ListaExternaScreen() {

    const [personajes, setPerosnajes] = useState([])

    const [mostrar, setMostar] = useState(false)

    useEffect(() => {
        cargarDatos()
        console.log(personajes)
    }, [mostrar])

    async function cargarDatos() {
        const resp = await fetch('https://api.sampleapis.com/rickandmorty/characters');
        const json = await resp.json();
        setPerosnajes(json);
    }

    return (
        <View>
            <View style={styles.barra} />
            <Text>ListaExternaScreen</Text>

            <Switch
                value={mostrar}
                onChange={() => setMostar(!mostrar)}>
            </Switch>
            <View style={{ alignItems: 'flex-end' }}>
                <Text  style={{ padding:15 }}>Filtrar a solo HUMANOS</Text>
            </View>

            <FlatList
                data={mostrar
                    ? personajes.filter((item: any) => item.species === "Human")
                    : personajes
                }

                renderItem={({ item }) =>
                    <Tarjeta2 datos={item} />
                }
            />

        </View>

    );
}

const styles = StyleSheet.create({
    barra: {
        height: 70,
        backgroundColor: "#585858"
    }

})

