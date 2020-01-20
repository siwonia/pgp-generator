import React, { useRef, useState } from "react";
import TextArea from "./TextArea";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button";

function EncodeView() {
  const publicKeyRef = useRef("");
  const messageRef = useRef("");
  const [encodedMessage, setEncodedMessage] = useState("");

  return (
    <Row>
      <Column>
        <TextArea title="Public Key" valueRef={publicKeyRef} />
        <TextArea title="Message" valueRef={messageRef} />
        <Button title="Encode" />
      </Column>
      <Column>
        <TextArea title="Encoded Message" value={encodedMessage} />
      </Column>
    </Row>
  );
}

export default EncodeView;
