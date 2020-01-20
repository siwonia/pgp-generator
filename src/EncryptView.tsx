import React, { useRef, useState } from "react";
import TextArea from "./TextArea";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button";

function EncryptView() {
  const publicKeyRef = useRef("");
  const messageRef = useRef("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  async function encryptMessage() {
    setEncryptedMessage(Math.random().toFixed(10));
  }

  return (
    <Row>
      <Column>
        <TextArea title="Public Key" valueRef={publicKeyRef} />
        <TextArea title="Message" valueRef={messageRef} />
        <Button title="Encrypt" onClick={encryptMessage} />
      </Column>
      <Column>
        <TextArea title="Encrypted Message" value={encryptedMessage} />
      </Column>
    </Row>
  );
}

export default EncryptView;
