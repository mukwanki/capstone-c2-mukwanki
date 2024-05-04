const Panier = (cart) => {
  return (
    <div className="container py-10">
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Panier</h2>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
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

export default Panier;
