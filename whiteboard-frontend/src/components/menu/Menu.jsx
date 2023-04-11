import { toolTypes } from '../../constants';
import rectangleIcon from '../../assets/icons/rectangle.svg';
import './menu.css';

const IconButton = ({ src, type }) => {
   return (
      <button className='menu-button'>
         <img src={src} width='80%' height='80%' alt='' />
      </button>
   );
};

function Menu() {
   return (
      <div className='menu-container'>
         <IconButton type={toolTypes.RECTANGLE} src={rectangleIcon} />
      </div>
   );
}

export default Menu;
