import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-5 bg-black/[0.8] text-white/[0.7] h-2/3">

    {/* stay Connected */}
    <div className="flex flex-col items-center mt-[3rem]">
      <h3>STAY CONNECTED</h3>

      {/* icons */}
      <div className="flex flex-row mt-5">
        {/* <TiSocialFacebook/> */}
        <a href="www.facebook.com">
        <img src="https://static.wixstatic.com/media/4f857b2e8a316c4e1ed16717a3d4ec8c.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4f857b2e8a316c4e1ed16717a3d4ec8c.png" alt="facebook_logo" className="h-[20px] w-[20px] "/>
        </a>
        <a href="www.twitter.com">
        <img src="https://static.wixstatic.com/media/89b1d2497b29ccbb7d37be1ec6ef0052.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/89b1d2497b29ccbb7d37be1ec6ef0052.png" alt="twitter_logo" className="h-[20px] w-[20px] ml-3"/>
        </a>
        <a href="www.pinterest.com">
        <img src="https://static.wixstatic.com/media/7a47b4f9746168811c85d801bc3e300a.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7a47b4f9746168811c85d801bc3e300a.png" alt="pinterest_logo" className="h-[20px] w-[20px] ml-3"/>
        </a>
        <a href="www.instagram.com">
        <img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png" alt="intagram_logo" className="h-[20px] w-[20px] ml-3"/>
        </a>
        
      </div>

    </div>

    {/* JoinUs */}
    <div className="flex flex-col mt-[3rem]">
      <h3 className="text-center ">JOIN US!</h3>
      <div className="">
      <div className="flex flex-col justify-center mt-5">
        <input type="text" placeholder="Enter your email" className="border-[1px] border-[#ff0000c4] bg-transparent px-4 py-1 text-sm text-white rounded-lg "/>
        <button className="bg-white/[0.5] text-black text-sm  py-1 px-2 rounded-lg mt-1">Join Us</button>
      </div>
      </div>
    </div>

    {/* need assistance */}
    <div className="flex-flex-col items-center mt-[3rem]">
      <h3 className="text-center">NEED ASSISTANCE?</h3>
      <div className="flex flex-col text-white/[0.8] mt-5 text-sm items-center">
        <p>123-213-321-311</p>
        <p>info@modelardor.com</p>
      </div>
    </div>
    <p className="md:col-span-3 text-center text-sm mt-[2rem] ">© 2023 by Vidit Jain. Powered and secured by ModelArdor</p>
  </div>


  
  )
}

export default Footer
