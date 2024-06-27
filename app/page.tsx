"use client";
import React from "react";
import Modal from "../components/modal";

export default function Home() {
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  return (
    <>
      <button onClick={() => { setShowErrorModal(!showErrorModal) }}>Show Modal</button>
      {showErrorModal && <Modal content={<div>Hello</div>} toggleModal={setShowErrorModal}/>}
    </>
  );
}
