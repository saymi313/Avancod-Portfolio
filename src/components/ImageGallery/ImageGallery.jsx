import Google from '../../assets/google.png';
import Trello from '../../assets/Trello.png';
import Monday from '../../assets/Monday.png';
import Notion from '../../assets/Notion.png';
import Slack from '../../assets/Slack.png';

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 sm:px-10 py-6 bg-white">
      {[
        { src: Google, alt: "Google" },
        { src: Trello, alt: "Trello" },
        { src: Monday, alt: "Monday" },
        { src: Notion, alt: "Notion" },
        { src: Slack, alt: "Slack" }
      ].map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <img 
            src={item.src} 
            alt={item.alt} 
            className="w-[120px] h-[50px] sm:w-[140px] sm:h-[60px] md:w-[150px] md:h-[60px] object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
