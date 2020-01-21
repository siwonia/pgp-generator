import React, { useRef, useState } from "react";
import TextArea from "./TextArea";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button";
import * as openpgp from "openpgp";

function EncryptView() {
  const publicKeyRef = useRef("");
  const messageRef = useRef("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  async function encryptMessage() {
    const keyResult = await openpgp.key.readArmored(publicKeyRef.current);
    const encryptResult = await openpgp.encrypt({
      message: openpgp.message.fromText(messageRef.current),
      publicKeys: keyResult.keys,
    });

    setEncryptedMessage(encryptResult.data);
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
