import Google from '../../assets/google.png'
import Trello from '../../assets/Trello.png'
import Monday from '../../assets/Monday.png'
import Notion from '../../assets/Notion.png'
import Slack from '../../assets/Slack.png'

const ImageGallery = () => {
    return (
        
        <div className="grid grid-cols-5 gap-10 px-10 py-6 bg-white">
        <div className="flex justify-center items-center">
          <img src={Google} alt="Image 1" className=" w-[150px] h-[60px] object-contain" />
        </div>
        <div className="flex justify-center items-center">
          <img src={Trello} alt="Image 2" className=" w-[150px] h-[60px] object-contain" />
        </div>
        <div className="flex justify-center items-center">
          <img src={Monday} alt="Image 3" className=" w-[150px] h-[60px] object-contain" />
        </div>
        <div className="flex justify-center items-center">
          <img src={Notion} alt="Image 4" className=" w-[150px] h-[60px] object-contain" />
        </div>
        <div className="flex justify-center items-center">
          <img src={Slack} alt="Image 5" className=" w-[150px] h-[60px] object-contain" />
        </div>
      </div>
      
      
    )
}

export default ImageGallery