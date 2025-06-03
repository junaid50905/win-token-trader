import './../assets/css/HomePage.css'


import HeroImg from '../assets/images/hero/hero-img.png'
import { FaApple, FaAndroid, FaWindows, FaAppleAlt } from "react-icons/fa";
import { IoCashOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import WorldMap from '../assets/images/world map.png'
import TryFreeDemoBtn from '../components/Buttons/TryFreeDemoBtn';





const Home = () => {
    return (
        <>
            <section id="hero-section">
                <div className="container pt-5">
                    <div className="row py-5">
                        {/* left */}
                        <div className="col-md-6 order-md-1 order-2">
                            <div className="hero-left d-flex justify-content-center align-items-center h-100">
                                <div>
                                    <h1 className='hero-title mb-5'><span>Investing Is</span> <br /> Even Better Now</h1>
                                    <p className='primary-text'>Providing you with the opportunity to invest in more than 100 assets for continuous income</p>
                                    <TryFreeDemoBtn/>
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <div className="col-md-6 order-md-2 order-1">
                            <div className="hero-right">
                                <img src={HeroImg} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            


            <section id="device-section">
                <div className="container my-5">
                    <h3 className="section-title text-center mb-4">For All Devices</h3>

                    <div className="row text-center">
                        <div className="col-md-3 col-sm-6">
                            <div className="card bg-secondary text-white mb-3">
                                <div className="card-body">
                                    <FaAndroid size={26} />
                                    <p>Android</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card bg-secondary text-white mb-3">
                                <div className="card-body">
                                    <FaApple size={26} />
                                    <p>iOS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card bg-secondary text-white mb-3">
                                <div className="card-body">
                                    <FaWindows size={26} />
                                    <p>Windows</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card bg-secondary text-white mb-3">
                                <div className="card-body">
                                    <FaAppleAlt size={26} />
                                    <p>MacOS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works">
                <div className="container my-5">
                    <h3 className="section-title text-center mb-4">How It Works</h3>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className='card m-1'>
                                <div className="card-body">
                                    <div className='d-flex gap-2'>
                                        <span><IoCashOutline size={26} /></span>
                                        <h4>Deposit</h4>
                                    </div>
                                    <p>Open a real account and add funds. We work with more than 20 payment systems.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className='card m-1'>
                                <div className="card-body">
                                    <div className='d-flex gap-2'>
                                        <span><BsGraphUpArrow size={26} /></span>
                                        <h4>Trade</h4>
                                    </div>
                                    <p>Trade any of 100 assets and stocks. Use technical analysis and trade the news.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className='card m-1'>
                                <div className="card-body">
                                    <div className='d-flex gap-2'>
                                        <span><BiMoneyWithdraw size={26} /></span>
                                        <h4>Withdraw</h4>
                                    </div>
                                    <p>Get funds easily to your bank card or e-wallet. We take no commission.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="trust-section">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 offset-lg-1 offset-md-3">
                            <div className='text-center mt-2 mb-4'>
                                <div className='d-flex align-items-center justify-content-center gap-3'>
                                    <span><MdOutlineSecurity size={40} /></span>
                                    <h3>Trusted</h3>
                                </div>
                                <p>EO Broker is a leader in the online trading industry. We are trusted by more than 70,000,000 clients.</p>
                                <button className='btn btn-sm btn-primary'>See mroe</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-2 offset-md-3">
                            <div className='card'>
                                <div className="card-body">
                                    <div className='d-flex gap-2'>
                                        <span><BiMoneyWithdraw size={26} /></span>
                                        <h4>Withdraw</h4>
                                    </div>
                                    <p>Get funds easily to your bank card or e-wallet. We take no commission.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="global-section">
                <div className="container">
                    <h3 className="section_title text-center mb-4"><RiGlobalLine size={40} className='me-2' /><span className='mt-1'>Global Trading Platform</span></h3>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="card my-1">
                                <div className="card-body">
                                    <div className='medium_font d-flex justify-content-center mt-1 gap-2'>
                                        <span>$10</span>
                                        <p>Minimum Deposit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card my-1">
                                <div className="card-body">
                                    <div className='medium_font d-flex justify-content-center mt-1 gap-2'>
                                        <span>$1</span>
                                        <p>Minimum Trading Amount</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card my-1">
                                <div className="card-body">
                                    <div className='medium_font d-flex justify-content-center mt-1 gap-2'>
                                        <span>$0</span>
                                        <p>Commissions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="card my-1">
                                <div className="card-body">
                                    <div className='medium_font d-flex justify-content-center mt-1 gap-2'>
                                        <span>$0</span>
                                        <p>Fees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-center mt-4 mb-5'>People from 48 countries trade at EO Broker</p>
                    <img src={WorldMap} alt="" className="img-fluid d-block mx-auto" />
                </div>
            </section>
        </>
    )
}

export default Home