import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ViewCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

export default function ViewCard(props) {

  const deletehadel = (nid) =>{
    console.log(nid)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8082/getNotes/${nid}`).then(() => {
          props.load();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ) 
      });
      }
    })
    
  }

  // const handleDownload = async (id,filename) => {
  //   console.log(id,filename)
  //   try {
  //     const response = await fetch(`http://localhost:8082/download/${id}`);
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(new Blob([blob]));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', filename);
  //     document.body.appendChild(link);
  //     link.click();
  //     link.parentNode.removeChild(link);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const date = props.date;
  const localDate = new Date(date).toLocaleString();
  return (
    <div className="view-card">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div className="attachment">
            {props.doc.map((a, index) => {
              return (
                <div key={index} className="attach">
                  <div className="attachicon">
                  <CloudDownloadIcon  fontSize="5px" />
                  <DeleteIcon fontSize="5px" />
                  <EditSharpIcon fontSize="5px"/>
                  <VisibilitySharpIcon fontSize="5px"/>
                  </div>
                    <span className="span">{a.dname}</span>
                </div>
              );
            })}
          </div>
        </Card.Body>
        <Card.Footer>
        <div className="atta">
            <Link className="nav-link" to={`/edit/${props.id}`}>
              <Button 
              className="my-btn" 
              as="input" 
              type="reset" 
              value="Edit" 
              variant="primary"
              />
            </Link>
              <Button
                onClick={()=>deletehadel(props.id)}
                className="my-btn"
                as="input"
                type="reset"
                value="Remove"
                variant="danger"
              />
              <Card.Text style={{fontSize:"15px", marginLeft:"15px", position:"relative" ,right:"90%"}}>{localDate}</Card.Text>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
