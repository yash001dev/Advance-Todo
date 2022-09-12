import _ from "lodash";
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CustomModal({
  isOpen,
  toggle,
  modelTitle,
  children,
  primaryBtnText,
  errors,
  handleSubmit,
}) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={toggle}>{modelTitle}</ModalHeader>
      <ModalBody>
        {children}
        {_.size(errors) > 0 && (
          <div className="text-danger">
            *Please fill all the required fields
          </div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => handleSubmit()}>
          {primaryBtnText}
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CustomModal;
