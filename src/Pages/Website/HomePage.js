
import Heders from "./Heders";
import SocialMidia from "./SocialMidia";
import Text from "./Text";

export default function HomePage() {   

    return (
        <>
     
        <div className="homepage">

            <div className="cover">
                <div className="blue-circle-right" ></div>
                 <div className="blue-circle-lfet" ></div>
            <Heders />
          <Text/>
            <SocialMidia/>
            </div>
        </div>
        </>
         
    );
}