import React from 'react'
import ModalImage from "react-modal-image";
export default function ImageViewer() {
  return (
    <ModalImage
  small={urlToTinyImageFile}
  large={urlToHugeImageFile}
  alt="Hello World!"
  />
  )
}

 