import { useState } from "react";
const ShoopingCart = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = () => {
    if (productName.trim() !== " " && productPrice.trim() !== "") {
      const newproduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantty: 1,
      };
      setProducts([...products, newproduct]);
      setProductName("");
      setProductPrice("");
    }
  };

  const removeProduct = (id) => {
    const updatedProduct = products.filter((product) => product.id !== id);
    setProducts(updatedProduct);
  };

  const increceProduct = (id) => {
    const updatedproduct = products.map((product) =>
      product.id === id
        ? { ...product, quantty: product.quantty + 1 }
        : product,
    );
    setProducts(updatedproduct);
  };

  const decricQuantity = (id) => {
    const updateDec = products.map((product) =>
      product.id === id && product.quantty > 1
        ? { ...product, quantty: product.quantty - 1 }
        : product,
    );

    setProducts(updateDec);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantty,
    0,
  );

  return (
    <div>
      <h1> simple shopping cart</h1>
      <h2> add a product</h2>
      <input
        type="text"
        placeholder="product name"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
      />

      <input
        type="number"
        min="0"
        placeholder="product price"
        onChange={(e) => setProductPrice(e.target.value)}
        value={productPrice}
      />
      <button onClick={handleAddProduct}> add to cart</button>

      <div>
        {products.length > 0 ? (
          <div>
            <h3> product in cart</h3>
            <ul>
              {products.map((product) => (
                <>
                  <li key={product.id}>
                    {/* <strong> {product.name}</strong> -${product.price.tofixed('2')}  */}
                    <strong>{product.name}</strong> - $
                    {product.price.toFixed(2)}
                    <div>
                      Quantity:
                      <button onClick={() => decricQuantity(product.id)}>
                        {" "}
                        -
                      </button>
                      {product.quantty}
                      <button onClick={() => increceProduct(product.id)}>
                        {" "}
                        +
                      </button>
                    </div>
                    <div>
                      <button onClick={() => removeProduct(product.id)}>
                        {" "}
                        remove
                      </button>
                    </div>
                  </li>
                </>
              ))}
            </ul>
            <h4> total price ${totalPrice}</h4>
          </div>
        ) : (
          <p> the cart is empty </p>
        )}
      </div>
    </div>
  );
};

export default ShoopingCart;
