const AnimalInfoCard = () => {
  return (
    <div className='container my-4 d-flex justify-content-center'>
      <div
        className='card text-center p-3 shadow-lg'
        style={{
          maxWidth: "600px",
          borderRadius: "15px",
          backgroundColor: "#FDE68A",
        }}
      >
        <div className='card-body'>
          <h3 className='card-title' style={{ color: "#F59E0B" }}>
            Love Animals?
          </h3>
          <p className='card-text' style={{ color: "#374151" }}>
            Our website helps you learn all about animals! You can find pets who
            need loving homes, discover fun facts about wild animals, and learn
            ways to protect our furry, scaly, and feathery friends!
          </p>
          <div
            className='card mt-3'
            style={{ backgroundColor: "#FEF3C7", borderRadius: "10px" }}
          >
            <h5 className='mt-2' style={{ color: "#EA580C" }}>
              Learn about animal
            </h5>
            <p className='card-text px-3'>
              Browse cute photos and stories of animals waiting for a family
              like yours!
            </p>
          </div>
          <div
            className='card mt-3'
            style={{ backgroundColor: "#FEF3C7", borderRadius: "10px" }}
          >
            <h5 className='mt-2' style={{ color: "#EA580C" }}>
              Learn and Protect
            </h5>
            <p className='card-text px-3'>
              Did you know tigers need our help? Or that elephants live in herds
              and are very social? We share ways you can help save animals in
              the wild.
            </p>
          </div>
          <div
            className='card mt-3'
            style={{ backgroundColor: "#FEF3C7", borderRadius: "10px" }}
          >
            <h5 className='mt-2' style={{ color: "#EA580C" }}>
              Tips
            </h5>
            <p className='card-text px-3'>
              We have cool tips on taking care of your pets, keeping them
              healthy, and making sure they are happy every day.
            </p>
          </div>
          <div className='mt-4'>
            <button
              className='btn btn-warning text-white'
              style={{ fontSize: "18px", borderRadius: "10px" }}
            >
              Join Us!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalInfoCard
