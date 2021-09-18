import React, { useState } from "react";
import FontLoader from "./FontLoader";
import Text from "./Text";
import Modal from "react-native-modal";
import Button from "./Button";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function costo(m) {
  if (m < 500) return 50;
  if (m % 500 === 0) return Math.floor(m / 500) * 50;
  return (Math.floor(m / 500) + 1) * 50;
}

function Resumen({ visible, onConfirmar, onCancelar, data }) {
  return (
    <View>
      <Modal isVisible={visible}>
        <FontLoader>
          <View style={styles.modal}>
            <Text style={{fontSize: 19, color: colors.c1}}>¿Confirmar Pedido?</Text>
            <Text style={{textDecorationLine: 'underline'}}>Buscar en:</Text>
            <Text>
              {data.ciudad},{data.calle},{data.nro}
            </Text>
            <Text style={{textDecorationLine: 'underline'}}>Entregar en:</Text>
            <Text>
              {data.ciudad2},{data.calle2},{data.nro2}
            </Text>

            <Text style={{textDecorationLine: 'underline'}}>Fecha entrega:</Text>
            <Text>
              {data.fecha ? data.fecha + " " + data.hora : "Lo antes posible"}
            </Text>
            <Text style={{textDecorationLine: 'underline'}}>Distancia:</Text>
            <Text>{Math.floor(data.distancia * 1000)} metros</Text>
            <Text style={{textDecorationLine: 'underline'}}>Costo:</Text>
            <Text>$ {costo(data.distancia * 1000)}</Text>
            <Text style={{textDecorationLine: 'underline'}}>Método pago:</Text>
            <Text>
              {data.nroTarjeta
                ? "Tarjeta:\n" + data.nroTarjeta + "\nTitular:\n" + data.titular
                : "Efectivo\n$ " +
                  (Number.parseFloat(data.$))}
            </Text>
            <View style={styles.botones}>
              <Button
                title="Cancelar"
                onPress={onCancelar}
                buttonStyle={{ backgroundColor: "#8d98a1" }}
              />
              <Button
                title="Confirmar"
                onPress={onConfirmar}
                buttonStyle={{ backgroundColor: colors.c1 }}
              />
            </View>
          </View>
        </FontLoader>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  botones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Resumen;
