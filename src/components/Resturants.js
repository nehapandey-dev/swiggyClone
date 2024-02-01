



function Resturants() {
 
  return (
    <>
      <section className="text-center pt-5">
        <div className="right">
          <h3>Restaurants with online food delivery in Bangalore</h3>
        </div>
        <div className="d-flex justify-content-center pt-4">
          <button className="filter border p-1 px-3 rounded-5">Delivery Time</button>
          <button className="filter border p-1 px-3 rounded-5">Relevance</button>
          <button
            className="filter border p-2 rounded-5"
          >
            Rating
          </button>
          <button className="filter border p-1 px-3 rounded-5">Cost: Low To High</button>
          <button className="filter border p-1 px-3 rounded-5">Cost: High To Low</button>
          <button className="filter border p-1 px-3 rounded-5">Filters </button>
        
        </div>
      </section>
      <hr />
    </>
  );
}

export default Resturants;
