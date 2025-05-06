import { useState, useEffect } from "react";
import config from "../../config";
import axios from "axios";

function Header() {
  const [machineInfo, setMachineInfo] = useState("");

  useEffect(() => {
    getMachineInfo();
  }, []);

  const getMachineInfo = () => {
    axios
      .get(`${config.apiUrl}/info`)
      .then((response) => setMachineInfo(response.data.result));
  };

  return (
    <div className="text-center">
      <img
        src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
        width="100"
        className="img-thumbnail"
        style={{ marginTop: "20px" }}
        alt="logo"
      />
      <hr />
      <h1>App for project on React + Asp.Net</h1>
      <h2>Launched on {machineInfo}</h2>
    </div>
  );
}

export default Header;
