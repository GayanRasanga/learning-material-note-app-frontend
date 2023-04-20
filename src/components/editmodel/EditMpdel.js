import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditMpdel() {
  const { id } = useParams();
  const [show, setShow] = useState(true);
  
const [title,settitle] = useState('');
const [note,setnote] = useState('');
const handleClose = () => setShow(false);

let navigate=useNavigate();


  const loadNote = async () => {
    const result = await axios.get(`http://localhost:8082/getNotes/${id}`);
    console.log(result);
    setnote(result.data.description);
    settitle(result.data.title);
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", note);
    axios({
      method: "PUT",
      url: `http://localhost:8082/update/${id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        Swal.fire("Good job!", "You clicked the button!", "success");
        handleClose();
        navigate("/view")
      })
      .catch(function (response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  
  useEffect(() => {
    loadNote();
  },[]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton onClick={()=>navigate("/view")}>
            <Modal.Title>Edit Note</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              border: "2px solid ",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="title" 
                onChange={(e) =>{settitle(e.target.value)}}
                value={title}
                placeholder="Enter Note Title"
                required
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="description"
                value={note}
                onChange={(e)=>{setnote(e.target.value)}}
                as="textarea"
                placeholder="Enter Note"
                required
              />
            </Form.Group>
            <Link to={"/view"}>
              <Button variant="primary" type="submit" onClick={onSubmit}  >
                Add Note
              </Button>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
