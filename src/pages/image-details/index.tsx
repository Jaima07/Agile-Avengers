import React from "react";
import { useParams } from "react-router-dom";
import animals from "../../data/animal.json";

const ImageDetailPage = () => {
  const { imageId } = useParams();
  console.log(imageId, "image", animals);
  const image = animals.find(
    (animal) => animal?.id?.toString() === imageId?.toString()
  );

  //   const image = animals.find((animal) => animal.id === imageId);

  if (!image) {
    return <h2>Image not found</h2>;
  }

  return (
    <div className="container">
      <h2 className="text-center mt-4">{image.name}</h2>
      <img src={image.image} alt={image.name} className="img-fluid rounded" />
      <p className="mt-3">{image.description}</p>
    </div>
  );
};

export default ImageDetailPage;
