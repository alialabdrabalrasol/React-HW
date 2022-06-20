import React from "react";
import "../App.css";

const CatContainer = (props) => {
  return (
    <div>
      <img class="cat-image" src={props.image} alt="Cat" />
      {props.name ? (
        <h2>Name:{props.name}</h2>
      ) : (
        <h2>You have to provide a cat name</h2>
      )}
      <h3>Age:{props.age} years</h3>
    </div>
  );
};

const Cat = () => {
  return (
    <div id="cats-container">
      <CatContainer
        image="https://wallpapercave.com/wp/wp3152088.jpg"
        name="Cat 1"
        age={2}
      />
      <CatContainer
        image="https://i.pinimg.com/564x/f8/30/5f/f8305f5b676b669ea0cc99c6803a43fd.jpg"
        name="Cat 2"
        age={1}
      />
      <CatContainer
        image="https://i.pinimg.com/originals/90/de/67/90de677b99f9bc8309a626b4329e6e94.png"
        age={4}
      />
      <CatContainer
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
        name="Cat 4"
        age={3}
      />
    </div>
  );
};

export default Cat;
