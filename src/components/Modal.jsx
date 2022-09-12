import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CustomModal({ isOpen, toggle, modelTitle, children }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={toggle}>{modelTitle}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CustomModal;
