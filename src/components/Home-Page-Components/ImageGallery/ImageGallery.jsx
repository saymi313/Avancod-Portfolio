import Google from '../../../assets/google.png';
import Trello from '../../../assets/Trello.png';
import Monday from '../../../assets/Monday.png';
import Notion from '../../../assets/Notion.png';
import Slack from '../../../assets/Slack.png';

const ImageGallery = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {[
            { src: Google, alt: "Google" },
            { src: Trello, alt: "Trello" },
            { src: Monday, alt: "Monday" },
            { src: Notion, alt: "Notion" },
            { src: Slack, alt: "Slack" }
          ].map((item, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-[100px] h-[40px] sm:w-[130px] sm:h-[50px] md:w-[150px] md:h-[60px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
