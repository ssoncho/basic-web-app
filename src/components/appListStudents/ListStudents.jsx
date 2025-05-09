import { Table } from "reactstrap";
import ModalStudent from "../appModalStudent/ModalStudent";
import AppRemoveStudent from "../appRemoveStudent/AppRemoveStudent";
import ModalPhoto from "../appPhotoModal/ModalPhoto";

function ListStudents(props) {
  const { students } = props;
  return (
    <Table dark>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Document</th>
          <th>Phone</th>
          <th>Registration</th>
          <th>Photo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!students || students.length <= 0 ? (
          <tr>
            <td colSpan="7" align="center">
              <b>Пока ничего нет</b>
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.document}</td>
              <td>{student.phone}</td>
              <td>{student.registrationDate}</td>
              <td>
                <ModalPhoto student={student} />
              </td>
              <td>
                <ModalStudent
                  create={false}
                  student={student}
                  resetState={props.resetState}
                  newStudent={props.newStudent}
                />
                &nbsp;&nbsp;
                <AppRemoveStudent
                  id={student.id}
                  resetState={props.resetState}
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default ListStudents;
