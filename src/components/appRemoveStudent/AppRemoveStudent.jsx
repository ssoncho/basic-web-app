import { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import config from "../../config";

function AppRemoveStudent(props) {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  const deleteStudent = () => {
    axios.delete(config.apiUrl + props.id).then(() => {
      props.resetState();
      toggle();
    });
  };
  return (
    <>
      <Button color="danger" onClick={() => toggle()}>
        Удалить
      </Button>
      <Modal isOpen={visible} toggle={toggle} style={{ width: "300px" }}>
        <ModalHeader style={{ justifyContent: "center" }}>
          Вы уверены?
        </ModalHeader>
        <ModalFooter
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button type="button" onClick={() => deleteStudent()} color="primary">
            Удалить
          </Button>
          <Button type="button" onClick={() => toggle()}>
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default AppRemoveStudent;
