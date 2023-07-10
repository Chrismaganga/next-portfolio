import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare,
     FaWhatsappSquare } from "react-icons/fa";
    

const Footer = () => {
  return (
   <content>
     
    <div className="fixed bottom-10 cursor-pointer
     text-white
      w-screen h-10 gap-x-8 flex items-center justify-center
      text-4xl ml-10 rounded-md 
      "
      >
     <FaTwitterSquare className="bg-blue-700 hover:bg-blue-800 rounded-md text-blue"/>
     <FaFacebookSquare className="bg-cyan-500 hover:bg-blue-800 rounded-md "/>
     <FaGithubSquare className="bg-black-400 hover:bg-blue-800 rounded-md "/>
     <FaWhatsappSquare className="bg-green-600 hover:bg-blue-800 rounded-md "/>
    
     
    </div>
   

 </content>
  )
}

export default Footer