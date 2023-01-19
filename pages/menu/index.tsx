import Image from "next/image";
import menu1 from "../../assets/menu-pages/811-Menu.webp";
import menu2 from "../../assets/menu-pages/811-Menu-2.webp";
import menu3 from "../../assets/menu-pages/811-Menu-3.webp";
import menu4 from "../../assets/menu-pages/811-Menu-4.webp";
import menu5 from "../../assets/menu-pages/811-Menu-5.webp";
import menu6 from "../../assets/menu-pages/811-Menu-6.webp";

const Menu: React.FC<{}> = () => {
  return (
    <div className="menuItem">
      <Image src={menu1} alt="background-image" className="background-image" />
      <Image src={menu2} alt="background-image" className="background-image" />
      <Image src={menu3} alt="background-image" className="background-image" />
      <Image src={menu4} alt="background-image" className="background-image" />
      <Image src={menu5} alt="background-image" className="background-image" />
      <Image src={menu6} alt="background-image" className="background-image" />
    </div>
  );
};

export default Menu;
