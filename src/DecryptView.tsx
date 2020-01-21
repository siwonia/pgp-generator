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
  const [isLoading, setIsLoading] = useState(false);

  async function decryptMessage() {
    if (isLoading) {
      return;
    }

    try {
      setIsLoading(true);
      openpgp.config.ignore_mdc_error = true;
      const privateKeyResult = await openpgp.key.readArmored(
        privateKeyRef.current
      );

      if (privateKeyResult.err || privateKeyResult.keys.length === 0) {
        throw new Error("Private key missing or broken!");
      }

      if (!passphraseRef.current) {
        throw new Error("Missing passphrase!");
      }

      await privateKeyResult.keys[0].decrypt(passphraseRef.current);

      const decryptResult = await openpgp.decrypt({
        message: await openpgp.message.readArmored(encryptedMessageRef.current),
        privateKeys: privateKeyResult.keys
      });

      setDecryptedMessage(decryptResult.data as string);
      setIsLoading(false);
    } catch (error) {
      setDecryptedMessage(error.message);
      setIsLoading(false);
    }
  }

  return (
    <Row>
      <Column>
        <TextArea title="Private Key" valueRef={privateKeyRef} />
        <TextArea title="Passphrase" valueRef={passphraseRef} />
        <TextArea title="Encrypted Message" valueRef={encryptedMessageRef} />
      </Column>
      <Column isLoading={isLoading}>
        <TextArea title="Decrypted Message" value={decryptedMessage} />
        <Button title="Encrypt" onClick={decryptMessage} />
      </Column>
    </Row>
  );
}

export default DecryptView;
