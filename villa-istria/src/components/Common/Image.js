import React, { useState } from "react";
import { Image as bImage, Modal } from "react-bootstrap";
import Image from "next/image";

const ImageComponent = (props) => {
  const { image, description } = props;

  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <Image
        fluid
        rounded
        alt={description}
        src={image}
        width={600}
        height={450}
        onClick={() => setShowImage(true)}
        layout="responsive"
      />
      {showImage && (
        <Modal
          size="xl"
          show={showImage}
          onHide={() => setShowImage(false)}
          contentClassName="custom-modal-content"
          centered
        >
          <Modal.Body>
            <bImage rounded show={showImage} alt={description} src={image} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ImageComponent;
