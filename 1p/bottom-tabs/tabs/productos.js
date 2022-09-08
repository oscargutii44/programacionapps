import React from "react";
import { View, text, StyleSheet, Button } from "react-native";

const ProductosView = (props) => {
    return(
            <View>
                <Button title="Agregar Producto" onPress={ () => props.navigation.navigate("productos_adds")}/>
            </View>
    )
};

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttons:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ProductosView;