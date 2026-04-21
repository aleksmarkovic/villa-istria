import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";

type ImageModule = { default?: string; src?: string };

interface ImageComponentProps {
  image: string | ImageModule;
  description: string;
}

const ImageComponent = ({ image, description }: ImageComponentProps) => {
  const imageSrc =
    typeof image === "string" ? image : image?.default || image?.src || "";

  const [showImage, setShowImage] = useState(false);

  return (
    <div style={{ position: "relative", height: "35vh" }}>
      <Image
        key={imageSrc}
        alt={description}
        src={imageSrc}
        onClick={() => setShowImage(true)}
        loading="lazy"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          cursor: "pointer",
          borderRadius: "5px",
          objectFit: "cover",
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
            <div className="custom-modal-image-wrap">
              <Image
                alt={description}
                src={imageSrc}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ImageComponent;
