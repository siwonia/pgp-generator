import React, { useRef, useState } from "react";
import TextArea from "./TextArea";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button";
import * as openpgp from "openpgp";

function DecryptView() {
  const privateKeyRef = useRef("");
  const passphraseRef = useRef("");
  const encryptedMessageRef = useRef("");
  const [decryptedMessage, setDecryptedMessage] = useState("");

  async function decryptMessage() {
    try {
      const privateKeyResult = await openpgp.key.readArmored(
        privateKeyRef.current
      );

      if (passphraseRef.current) {
        await privateKeyResult.keys[0].decrypt(passphraseRef.current);
      }

      const decryptResult = await openpgp.decrypt({
        message: openpgp.message.fromText(encryptedMessageRef.current),
        privateKeys: privateKeyResult.keys
      });

      console.log(decryptResult);

      setDecryptedMessage(decryptResult.data as string);
    } catch (error) {
      setDecryptedMessage(error.message);
    }
  }

  return (
    <Row>
      <Column>
        <TextArea title="Private Key" valueRef={privateKeyRef} />
        <TextArea title="Passphrase (optional)" valueRef={passphraseRef} />
        <TextArea title="Encrypted Message" valueRef={encryptedMessageRef} />
      </Column>
      <Column>
        <TextArea title="Decrypted Message" value={decryptedMessage} />
        <Button title="Encrypt" onClick={decryptMessage} />
      </Column>
    </Row>
  );
}

export default DecryptView;
