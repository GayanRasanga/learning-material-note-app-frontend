import React from "react";
import { useEffect, useState } from "react";
import ViewCard from "../components/viewCard/ViewCard";


export default function View() {
  // const [pages, setPage] = useState(0);
  const [content, setContent] = useState([]);
  const fetchNots = async () => {
    fetch('http://localhost:8082/getNotes')
    .then((response) => response.json())
    // .then((json) =>console.log(json));
    .then((json) =>setContent(json));
  };
  // console.log(content)
  
  useEffect(() => {
    fetchNots();
    
  },[]);

  return (
  <div>

    { content.length > 0  && content.map((results,index) =>(
      
      <ViewCard
      key={index}
      date={results.date}
      description={results.description}
      title={results.title}
      doc={results.documents}
      id={results.nid}
      load={fetchNots}
      />
     ))}
  </div>
  );
}
