import React from "react";
import Dialog from "../Dialog";

const ProductDialog = ({ isOpened, isAdded }) => {
    return <Dialog isOpen={isOpened}>
        <p style={{ margin: 0 }}>Product is {isAdded ? 'added' : 'removed' }</p>
    </Dialog>
}

export default ProductDialog;
