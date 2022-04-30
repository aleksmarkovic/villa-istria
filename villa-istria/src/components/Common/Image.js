import React, { useState } from "react";
import { Image, Modal } from "react-bootstrap";

const ImageComponent = (props) => {
  const { pageTitle, image, description } = props;

  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <Image
        fluid
        rounded
        alt={description}
        src={image}
        width={400}
        onClick={() => setShowImage(true)}
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
            <Image
              // fluid
              rounded
              show={showImage}
              alt={description}
              src={image}
              // width={400}
              // onClick={onImageClick}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ImageComponent;
