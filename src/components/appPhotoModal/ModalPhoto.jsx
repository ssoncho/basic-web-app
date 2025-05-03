import { useState } from "react";
import config from "../../config";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function ModalPhoto(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible && imageLoaded);
  };
  return (
    <>
      <img
        onClick={toggle}
        src={config.apiStaticMedia + props.student.photo}
        alt="No photo"
        style={{ height: 50 }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
      />
      <Modal isOpen={visible} toggle={toggle}>
        <ModalHeader
          style={{
            color: "white",
            justifyContent: "center",
            backgroundColor: "#212529",
          }}
        >
          Фото
        </ModalHeader>
        <ModalBody
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#212529",
          }}
        >
          <img
            src={config.apiStaticMedia + props.student.photo}
            alt="loading"
            width="100%"
          />
        </ModalBody>
        <ModalFooter
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#212529",
          }}
        >
          {" "}
          <Button type="button" onClick={() => toggle()}>
            Закрыть
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalPhoto;
