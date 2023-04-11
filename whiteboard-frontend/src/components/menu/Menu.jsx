import rectangleIcon from '../../assets/icons/rectangle.svg';

import { useDispatch, useSelector } from 'react-redux';
import { toolTypes } from '../../constants';
import { setToolType } from '../../redux/features/whiteboard/whiteboardSlice';
import './menu.css';

const IconButton = ({ src, type }) => {
   const dispatch = useDispatch();
   const { tool } = useSelector((state) => state.whiteboard);

   const handleToolChange = () => dispatch(setToolType(type));

   return (
      <button
         className={`menu-button ${tool === type ? 'menu-button-active' : ''}`}
         onClick={handleToolChange}
      >
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
