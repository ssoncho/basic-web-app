import { Container, Row, Col } from "reactstrap";
import ListStudents from "../appListStudents/ListStudents";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalStudent from "../appModalStudent/ModalStudent";
import config from "../../config";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    axios
      .get(`${config.apiUrl}/students`)
      .then((response) => setStudents(response.data.result));
  };

  const resetState = () => {
    getStudents();
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <ListStudents
            students={students}
            resetState={resetState}
            newStudent={false}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalStudent
            create={true}
            resetState={resetState}
            newStudent={true}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
