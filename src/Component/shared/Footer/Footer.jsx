import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import twitter from '../../../assets/twitter.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
        <div>
          <h2 className="text-2xl font-bold">Keen<span className="text-green-400">Keeper</span></h2>
          <p className="text-gray-400 mt-1 text-sm">Keep your friendships alive.</p>
        </div>
        <div className="flex gap-4">
          <img src={facebook} alt="facebook" className="w-6 h-6" />
          <img src={instagram} alt="instagram" className="w-6 h-6" />
          <img src={twitter} alt="twitter" className="w-6 h-6" />
        </div>
        <p className="text-gray-500 text-sm">© 2025 KeenKeeper. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
