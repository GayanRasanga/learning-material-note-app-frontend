import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Form.css";
import axios from "axios";
import Swal from 'sweetalert2';

export default function Forms() {

const [title,settitle] = useState('');
const [note,setnote] = useState('');
const [file,setfiles] = useState([]);

function handleFileInputChange(e) {
  const selectedFiles = Array.from(e.target.files);
  setfiles(selectedFiles);
}
console.log(file);


const cleaField = () =>{
  settitle('');
  setnote('');
  setfiles(['']);
}


const addnote = () => {

  const formData = new FormData();
  for (let i = 0; i < file.length; i++) {
    formData.append('images', file[i]);
  }
  formData.append('title',title);
  formData.append('description',note);
  axios({
    method: "POST",
    url: "http://localhost:8082/upload",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      cleaField();
    })
    .catch(function (response) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      cleaField();
    });
   
};
  return (
    <div className="contenner">
      <Form style={{border:"2px solid " , borderRadius:"20px", padding:"30px"}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Control onChange={(e)=>{settitle(e.target.value)}} value={title}  type="email" placeholder="Enter Title" />
          <br />
          <Form.Control value={note} onChange={(e)=>{setnote(e.target.value)}} as="textarea" placeholder="Enter Note" />
        </Form.Group>
        <input multiple onChange={handleFileInputChange} type="file" id="file"  />
        <Button onClick={addnote}  variant="primary" type="submit">
          Add Note
        </Button>
      </Form>
    </div>
  );
}
