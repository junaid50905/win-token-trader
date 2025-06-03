import React from 'react'

const HowItWorks = () => {
  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-4">How It Works</h3>

        <div className="row text-center">
          <div className="col">
            <div className="card bg-secondary text-white mb-3">
              <div className="card-body">
                <FaAndroid size={32} />
                <p>Android</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card bg-secondary text-white mb-3">
              <div className="card-body">
                <FaApple size={32} />
                <p>iOS</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card bg-secondary text-white mb-3">
              <div className="card-body">
                <FaWindows size={32} />
                <p>Windows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks