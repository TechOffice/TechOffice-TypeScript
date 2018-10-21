import { knightPosition } from "./knightPosition";

const squareSpec = {
    drop(props) {
        knightPosition.setPosition([props.x, props.y]);
        console.log("drop" + [props.x, props.y]);
    }
};

export {
    squareSpec
};