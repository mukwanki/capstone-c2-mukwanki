// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1); // State pour stocker la quantité d'articles

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value)); // Met à jour la quantité en convertissant la valeur de l'input en nombre
  };

  const addToCart = () => {
    const newItem = {
      id: cart.length + 1,
      name: description,
      price: 40,
      quantity: quantity, // Ajoute la quantité à l'objet d'article
    };
    setCart([...cart, newItem]);
    alert("Article ajouté au panier!");
  };
  const location = useLocation();
  const DeboImg = new URLSearchParams(location.search).get("image");
  const description = new URLSearchParams(location.search).get("description");
  const price = new URLSearchParams(location.search).get("price");
  return (
    <div className="container py-10">
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-wrap items-center">
              {" "}
              {/* Utilisation de flex pour centrer les éléments */}
              <div className="w-full md:w-1/2 md:text-center mb-4 md:mb-0">
                {" "}
                {/* Pour centrer les éléments sur les écrans md et supérieurs */}
                <img
                  src={DeboImg}
                  alt="Nom du produit"
                  className="rounded-lg mb-4 inline-block max-w-full h-auto mx-auto" // Redimensionnement de l'image et centrage horizontal
                />
              </div>
              <div className="w-full md:w-1/2 md:text-center">
                <p className="text-3xl font-bold mb-4">{description}</p>
                <p className="text-xl font-bold text-gray-800 mb-4">
                  {price}
                </p>{" "}
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-300 rounded-md p-2 mb-4"
                />
                <button
                  onClick={addToCart}
                  className="bg-primary hover:bg-secondary text-black font-bold py-2 px-4 rounded"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Panier</h2>

            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span className="text-xl font-bold mb-4">Total</span>
                  <span>{item.name}</span>
                  <span>{item.price * item.quantity}</span>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
