import React from "react";
import { Modal, Pressable, Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

interface Props {
  showMapModal: boolean;
  setShowMapModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLocationSeleccion = ({ showMapModal, setShowMapModal }: Props) => {
  return (
    <Modal visible={showMapModal}>
      <View className="w-full">
        <MapView className="h-full w-full" />
        <View className="absolute w-full bottom-[2%]">
          <View
            // style={styles.centeredView}
            className="w-11/12 bg-white m-auto rounded-md p-3 "
          >
            <Text>Selected place</Text>
            <Pressable
              className="px-3 bg-blue-200 py-1 rounded-md mx-auto"
              onPress={() => setShowMapModal(false)}
            >
              <Text>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// const styles = StyleSheet.create({
//   centeredView: {
//     position: "absolute",
//     left: "50%",
//     transform: [{ translateX: 50 }],
//   },
// });
export default ModalLocationSeleccion;
