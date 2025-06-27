import React, { useState } from "react";
import Image from "next/image";
import { Modal, Image as BootstrapImage } from "react-bootstrap";

const ImageComponent = (props) => {
  const { image, description } = props;

  const [showImage, setShowImage] = useState(false);

  return (
    <div style={{ position: "relative", height: "35vh" }}>
      <Image
        key={image}
        alt={description}
        src={image}
        onClick={() => setShowImage(true)}
        loading="lazy"
        fill
        style={{
          borderRadius: "5px",
        }}
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
            <BootstrapImage
              rounded
              show={showImage}
              alt={description}
              src={image}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ImageComponent;
