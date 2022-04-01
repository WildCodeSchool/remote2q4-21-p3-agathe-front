import Navbar from '../../components/home/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./NewUser.css";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      axios
        .post(`${process.env.REACT_APP_URL_SERVER}/api/users`, data)
        .then((res) => {
          if (res.status === 200) {
            console.log("création réussie")
            // setUpdate("Mise à jour effectuée");
            // console.log({ update });
            //   redirect("/#homepage");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='new'>
        <Sidebar />
        <div className="newContainer">
          <div className="newTop">
            <h1>{title}</h1>
          </div>
          <div className="newBottom">
            <div className="newRight">
              <form onSubmit={handleSubmit(onSubmit)}>
                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder}
                    {...register(input.name)} />  
                  </div>
                ))}
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default New