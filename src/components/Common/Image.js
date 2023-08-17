import React, { useState } from "react";
import { Image, Modal } from "react-bootstrap";

const ImageComponent = (props) => {
  const { image, description } = props;

  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <Image
        fluid
        rounded
        key={image}
        alt={description}
        src={image}
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
            <Image rounded show={showImage} alt={description} src={image} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ImageComponent;
