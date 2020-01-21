import React, { useRef, useState } from "react";
import TextArea from "./TextArea";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button";
import * as openpgp from "openpgp";

function GenerateView() {
  const passphraseRef = useRef("");
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function generateKeys() {
    if (isLoading) {
      return;
    }

    try {
      setIsLoading(true);

      if (!passphraseRef.current) {
        throw new Error("Missing passphrase!");
      }

      const generateKeyResult = await openpgp.generateKey({
        userIds: [{}],
        passphrase: passphraseRef.current
      });

      setPrivateKey(generateKeyResult.privateKeyArmored);
      setPublicKey(generateKeyResult.publicKeyArmored);
      setIsLoading(false);
    } catch (error) {
      setPrivateKey(error.message);
      setPublicKey("");
      setIsLoading(false);
    }
  }

  return (
    <Row>
      <Column>
        <TextArea title="Passphrase" valueRef={passphraseRef} />
      </Column>
      <Column isLoading={isLoading}>
        <TextArea title="Private Key" value={privateKey} />
        <TextArea title="Public Key" value={publicKey} />
        <Button title="Generate Keys" onClick={generateKeys} />
      </Column>
    </Row>
  );
}

export default GenerateView;
