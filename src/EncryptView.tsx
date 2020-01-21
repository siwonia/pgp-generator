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
  const [isLoading, setIsLoading] = useState(false);

  async function encryptMessage() {
    if (isLoading) {
      return;
    }

    try {
      setIsLoading(true);
      const publicKeyResult = await openpgp.key.readArmored(
        publicKeyRef.current
      );

      if (publicKeyResult.err || publicKeyResult.keys.length === 0) {
        throw new Error("Public key missing or broken!");
      }

      if (!decrptedMessageRef.current) {
        throw new Error("Missing message to enrypt");
      }

      const encryptResult = await openpgp.encrypt({
        message: openpgp.message.fromText(decrptedMessageRef.current),
        publicKeys: publicKeyResult.keys
      });

      setEncryptedMessage(encryptResult.data);
      setIsLoading(false);
    } catch (error) {
      setEncryptedMessage(error.message);
      setIsLoading(false);
    }
  }

  return (
    <Row>
      <Column>
        <TextArea title="Public Key" valueRef={publicKeyRef} />
        <TextArea title="Message" valueRef={decrptedMessageRef} />
      </Column>
      <Column isLoading={isLoading}>
        <TextArea title="Encrypted Message" value={encryptedMessage} />
        <Button title="Encrypt" onClick={encryptMessage} />
      </Column>
    </Row>
  );
}

export default EncryptView;
