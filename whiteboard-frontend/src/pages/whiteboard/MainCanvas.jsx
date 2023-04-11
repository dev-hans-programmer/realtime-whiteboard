import rough from 'roughjs';

import { useRef, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { actions, toolTypes } from '../../constants';

function MainCanvas() {
   const canvasRef = useRef();
   const toolType = useSelector((state) => state.whiteboard.tool);
   const [action, setAction] = useState(null);

   useLayoutEffect(() => {
      const rc = rough.canvas(canvasRef.current);
      rc.rectangle(100, 100, 200, 200);
      rc.line(100, 100, 200, 200);
   }, []);

   const handleMouseDown = (e) => {
      const { clientX, clientY } = e;

      switch (toolType) {
         case toolTypes.RECTANGLE:
            setAction(actions.DRAWING);
            break;
         default:
            setAction(null);
      }
   };

   return (
      <canvas
         onMouseDown={handleMouseDown}
         ref={canvasRef}
         width={window.innerWidth}
         height={window.innerHeight}
      />
   );
}

export default MainCanvas;
