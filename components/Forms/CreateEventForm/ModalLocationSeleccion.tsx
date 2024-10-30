import React from "react";
import { Button, Modal } from "react-native";

interface Props {
  showMapModal: boolean;
  setShowMapModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLocationSeleccion = ({ showMapModal, setShowMapModal }: Props) => {
  return (
    <Modal visible={showMapModal}>
      <Button title="Cerrar Ventana" onPress={() => setShowMapModal(false)} />
    </Modal>
  );
};

export default ModalLocationSeleccion;
