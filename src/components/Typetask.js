import React, { useEffect, useState } from "react";
import { BaseUrl } from "./Path";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "../App.css";

function Typetask() {
  const [tasks, settasks] = useState();
  const [show, setShow] = useState(false);
  const [addtaskshow, addtasksetShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeaddtask = () => addtasksetShow(false);
  const openaddtask = () => addtasksetShow(true);
  const [ids, setids] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://backend-six-dun.vercel.app/")
      .then((res) => {
        settasks(res.data);
        const take_id = res.data.map((e) => e.id);
        setids(take_id);
        console.log(res.data)
      })
      .then(setShow(true))
      .catch((e) => console.log(e.message));
  }, []);

  const [value, setdata] = useState({
    id: "",
    name: "",
    // javobgar: "",
    // topshiriq_turi: "",
    // topshiriq_nomer: "",
    // topshiriq_sana: "",
    // topshiriq_otdel: "",
    // topshiriq_mavzu: "",
    // topshiriq_muddat: "",
  });
  const max_id = Math.max(...ids) + 1;

  // console.log(data);

  const handleChange = (e) => {
    setdata({ ...value, [e.target.name]: e.target.value });
  };

  function addtasks(params) {
    params.preventDefault();
    // console.log(value);

    axios.post(BaseUrl + "typetask/", value).then((res) => {
      // console.log(res.data);
      closeaddtask();
      // handleClose();
      navigate("/typetask/");
      // handleShow();

      window.location.reload();
    });
    // .then(setShow(true));
  }
  // function task_delete(params) {
  //   const comfirm = window.confirm("Would you like to delete?!");
  //   if (comfirm) {
  //     axios.delete(BaseUrl + "tasks/" + id).then(navigate("/tasks/"));
  //   }
  // }

  return (
    <div className="ml-2 mt-2 max-w-screen-sm ">
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">NAME</th>
            <th className="text-center">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td className="grid justify-items-center ">
                  <Link to={"/typetask/" + item.id}>
                    <img src="/images/icons8-settings-64.png" />
                  </Link>
                  {/* <Link to={"/tasks/" + item.id}>
                    <Button variant="danger" onClick={task_delete}>
                      Delete
                    </Button>
                  </Link> */}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="flex flex-row space-x-2">
        <img src="/images/icons8-plus-64.png" alt="add" onClick={openaddtask} />
        <span>Add task</span>
      </div>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Topshiriqlar tyri</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {tasks &&
            tasks.map((item) => (
              <ul className="border-b-2 no-underline ">
                <li
                  key={item.id}
                  className="border border-slate-500 my-2 px-2 hover:bg-cyan-600 hover:text-white "
                >
                  <Link to={"/tasks/" + item.id}>{item.name}</Link>
                </li>
             
              </ul>
            ))}{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={openaddtask}>
            + Add Task
          </Button>
        </Modal.Footer>
      </Modal> */}
      {/* add task */}

      <Modal
        show={addtaskshow}
        onHide={closeaddtask}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>add task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <label htmlFor="name">id:</label>
            <input
              type="text"
              placeholder="id"
              name="id"
              value={max_id}
              onChange={handleChange}
              style={{ width: "460px" }}
            />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="enter name task"
              name="name"
              onChange={handleChange}
              style={{ width: "460px" }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeaddtask}>
            Close
          </Button>
          <Button variant="primary" onClick={addtasks}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Typetask;
