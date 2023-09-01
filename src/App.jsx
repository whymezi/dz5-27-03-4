import React from "react";
import {useState} from "react";

export default function Form(){
  const [person, setPerson] = useState({
    firstName: "Barbara",
    familia: "Hepworth",
    email: "bhepworth@react.com",
    what: "love cats"
  });

  function handleFirstName(e){
    setPerson({
      ...person,
      firstName: e.target.value
    })
  }

  function handleFamilia(e){
    setPerson({
      ...person,
      familia: e.target.value
    })
  }

  function handleEmail(e){
    setPerson({
      ...person,
      email: e.target.value
    })
  }

  function handleWhat(e){
    setPerson({
      ...person,
      what: e.target.value
    })
  }

  return(
    <>
    <label>
      First Name:
      <input value={person.firstName} onChange={handleFirstName}/>
    </label>
    <label>
      Familia:
      <input value={person.familia} onChange={handleFamilia}/>
    </label>
    <label>
      Email:
      <input value={person.email} onChange={handleEmail}/>
    </label>
    <label>
      What:
      <input value={person.what} onChange={handleWhat}/>
    </label>
    <p>
      {person.firstName}{" "}
      {person.familia}{" "}
      {person.email}{" "}
      {person.what}{" "}
    </p>
    </>
  )
}



