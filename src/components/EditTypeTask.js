import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "./Path";

function EditTypeTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, settask] = useState({
    id: id,
    name: "",
  });
  useEffect(() => {
    axios.get(BaseUrl + "typetask/" + id).then((res) => settask(res.data));
  }, []);

  function do_change(params) {
    settask({ ...task, name: params.target.value });
  }

  function do_update(params) {
    params.preventDefault();
    axios
      .put(BaseUrl + "typetask/" + id + "/", task)
      .then((res) => {
        console.log(res.data);
        navigate("/typetask/");
      })
      .catch((e) => {});
  }

  function task_delete(params) {
    const comfirm = window.confirm("Would you like to delete?!");
    if (comfirm) {
      axios
        .delete(BaseUrl + "typetask/" + id)
        .then(navigate("/typetask/"))
        .catch((e) => {});
    }
  }

  return (
    <form>
      <div className="flex flex-grow space-x-2">
        <div className="space-x-2">
          <label htmlFor="id" className="">
            Task id
          </label>
          <input type="text" name="id" value={id} />
        </div>
        <div>
          <label htmlFor="name" className="space-x-2">
            {" "}
            Task name:{" "}
          </label>
          <input type="text" id="name" value={task.name} onChange={do_change} />
        </div>

        {/* <input type="checkbox" class="rounded text-pink-500" /> */}
        <input
          type="button"
          value="Update"
          name="update"
          id="update"
          className="bg-blue-500 p-2 rounded-lg"
          onClick={do_update}
        />
        <input
          type="button"
          value="Delete"
          name="delete"
          id="delete"
          className="bg-red-500 p-2 rounded-lg"
          onClick={task_delete}
        />
        <Link to={"/typetask/"}>
          <input
            type="button"
            value="🢀 Go to back"
            name="cancel"
            id="cancel"
            className="bg-stone-500 p-2 rounded text-white"
          />
        </Link>
      </div>
    </form>
  );
}

export default EditTypeTask;
