import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
      <div className="flex items-center justify-start w-full overflow-none bg-green-500 py-5 px-8 text-white text-2xl leading-10 Grotesk">

        <div className="inline-block border-solid">
          <FontAwesomeIcon icon = {faBars} style={{width: '20px', color: 'white'}} />
        </div>
        <div className="inline-block mx-14">
          Faithhouse International Centre
        </div>

      </div>
  );
}

export default Header;