import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import MapView, { LatLng, MapPressEvent, Marker } from "react-native-maps";

interface Props {
  showMapModal: boolean;
  setShowMapModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLocationSeleccion = ({ showMapModal, setShowMapModal }: Props) => {
  const [selectedCoordinates, setSelectedCoordinates] = useState<LatLng | null>(
    null,
  );
  const handlePressMap = (e: MapPressEvent) => {
    setSelectedCoordinates(e.nativeEvent.coordinate);
  };

  const handleCloseModal = () => {
    setSelectedCoordinates(null);
    setShowMapModal(false);
  };
  return (
    <Modal visible={showMapModal}>
      <View className="w-full">
        <MapView className="h-full w-full" onPress={handlePressMap}>
          {selectedCoordinates !== null && (
            <Marker coordinate={selectedCoordinates as LatLng} />
          )}
        </MapView>
        <View className="absolute w-full bottom-[2%]">
          <View className="w-11/12 bg-white m-auto rounded-md p-3 ">
            {selectedCoordinates === null ? (
              <Text>Seleccione una ubicación</Text>
            ) : (
              <Text>
                Latitude: {selectedCoordinates?.latitude}, Longitude:{" "}
                {selectedCoordinates?.longitude}
              </Text>
            )}
            <Pressable
              className="px-3 bg-blue-200 py-1 rounded-md mx-auto"
              onPress={handleCloseModal}
            >
              <Text>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLocationSeleccion;
