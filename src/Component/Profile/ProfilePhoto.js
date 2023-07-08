import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Figure} from "react-bootstrap";



function Photo() {
  return (
<Figure>
  <Figure.Image
    width={400}
    height={450}
    alt="250x300"
    src="/im1.png"
  />

</Figure>
  );
}

export default Photo;
