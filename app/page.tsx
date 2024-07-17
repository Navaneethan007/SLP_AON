"use client";
import React from "react";
import ModalDialog from "../components/modal";
import MessageQuery from "../components/messagequery";

export default function Home() {
  const [showErrorModal, setShowErrorModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setShowErrorModal(!showErrorModal)}>Show Modal</button>
      {showErrorModal && (
        <ModalDialog
          content={<MessageQuery />}
          toggleModal={setShowErrorModal}
        />
      )}
    </>
  );
}
