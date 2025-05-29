import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section>
            <div className="gradient-bg hero">
                <h1>The Gateway to DeFi</h1>
                <p>WinToken Trader is the only trading platform you’ll ever need.</p>
                <Link to={'/login'} className="btn btn-primary mt-3 mb-4">
                    Start Trading
                </Link>

                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <div className="ratio ratio-16x9">
                    <video autoPlay muted loop playsInline>
                        <source
                            src="https://nav7jirfgkzqoriy.public.blob.vercel-storage.com/hero-video-CRplem4muNNjgMawBEtXkagZRiT5O0.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                  </div>
                </div>
            </div>
        </section>
  )
}

export default HeroSection