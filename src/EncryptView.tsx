import React, { useRef, useState } from "react";
import TextArea from "./TextArea";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button";
import * as openpgp from "openpgp";

function EncryptView() {
  const publicKeyRef = useRef("");
  const decrptedMessageRef = useRef("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  async function encryptMessage() {
    try {
      const publicKeyResult = await openpgp.key.readArmored(
        publicKeyRef.current
      );
      const encryptResult = await openpgp.encrypt({
        message: openpgp.message.fromText(decrptedMessageRef.current),
        publicKeys: publicKeyResult.keys
      });

      setEncryptedMessage(encryptResult.data);
    } catch (error) {
      setEncryptedMessage(error.message);
    }
  }

  return (
    <Row>
      <Column>
        <TextArea title="Public Key" valueRef={publicKeyRef} />
        <TextArea title="Decrypted Message" valueRef={decrptedMessageRef} />
      </Column>
      <Column>
        <TextArea title="Encrypted Message" value={encryptedMessage} />
        <Button title="Encrypt" onClick={encryptMessage} />
      </Column>
    </Row>
  );
}

export default EncryptView;
