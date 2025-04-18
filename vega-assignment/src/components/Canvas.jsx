import React, { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';
import {useLocation} from 'react-router-dom'

const Canvas = () => {
  const [caption, setCaption] = useState('');
  const canvasRef = useRef(null);
  const fabricCanvas = useRef(null);

  const location =  useLocation();
  const imageUrl = location.state?.imageUrl;

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      selection: true,
    });
    fabricCanvas.current = canvas;
  
    if (imageUrl) {
      console.log('Loading image from URL:', imageUrl);
  
      const imgElement = new Image();
      imgElement.crossOrigin = 'anonymous';
      imgElement.src = imageUrl;
      imgElement.onload = () => {
        console.log('Image loaded as HTML element');
        const fabricImage = new fabric.Image(imgElement);
        fabricImage.set({
          left: 100,
          top: 100,
          scaleX: 0.8,
          scaleY: 0.8,
        });
        canvas.add(fabricImage);
        canvas.setActiveObject(fabricImage);
      };
      imgElement.onerror = (error) => {
        console.error('Failed to load image:', error);
      };
    }

    // Optional: Delete object with keyboard "Delete"
    const handleKeyDown = (e) => {
      if (e.key === 'Delete') {
        deleteSelectedObject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      fabricCanvas.current.dispose();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // === Canvas Tools ===

// === Tools ===
const addRectangle = () => {
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'blue',
    width: 150,
    height: 100,
  });
  fabricCanvas.current.add(rect).setActiveObject(rect);
};

const addCircle = () => {
  const circle = new fabric.Circle({
    left: 150,
    top: 150,
    radius: 50,
    fill: 'green',
  });
  fabricCanvas.current.add(circle).setActiveObject(circle);
};

const addTriangle = () => {
  const triangle = new fabric.Triangle({
    width: 100,
    height: 100,
    fill: 'orange',
    left: 200,
    top: 200,
  });
  fabricCanvas.current.add(triangle).setActiveObject(triangle);
};

const addPolygon = () => {
  const polygon = new fabric.Polygon(
    [
      { x: 200, y: 0 },
      { x: 250, y: 50 },
      { x: 250, y: 100 },
      { x: 150, y: 100 },
      { x: 150, y: 50 },
    ],
    {
      left: 300,
      top: 300,
      fill: 'purple',
    }
  );
  fabricCanvas.current.add(polygon).setActiveObject(polygon);
};

const addText = () => {
  const text = new fabric.IText('Editable Text', {
    left: 250,
    top: 250,
    fill: 'black',
    fontSize: 24,
  });
  fabricCanvas.current.add(text).setActiveObject(text);
};

const bringForward = () => {
  const active = fabricCanvas.current.getActiveObject();
  if (active) {
    fabricCanvas.current.bringForward(active);
  }
};

const sendBackward = () => {
  const active = fabricCanvas.current.getActiveObject();
  if (active) {
    fabricCanvas.current.sendBackwards(active);
  }
};

const deleteSelectedObject = () => {
  const active = fabricCanvas.current.getActiveObject();
  if (active) {
    fabricCanvas.current.remove(active);
  }
};

const downloadCanvasAsImage = () => {
  const dataURL = fabricCanvas.current.toDataURL({
    format: 'png',
    quality: 1.0,
  });

  const link = document.createElement('a');
  link.href = dataURL;
  link.download = `${caption || 'image'}.png`;
  link.click();
};

const changeColor = (color) => {
  const canvas = fabricCanvas.current;
  const activeObject = canvas.getActiveObject();

  if (!activeObject) return;

  if (activeObject.type === 'activeSelection') {
    activeObject.forEachObject((obj) => {
      obj.set('fill', color);
    });
  } else {
    activeObject.set('fill', color);
  }

  canvas.renderAll();
};

return (

  <div className='container'>
  <div>

  
  <input 
        type="text" 
        className='caption' 
        placeholder="Enter your caption here..." 
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
  
  <div>
    {/* Color Picker */}
    <div style={{ marginBottom: '10px' }}>
      <input
        type="color"
        onChange={(e) => changeColor(e.target.value)}
        title="Change Fill/Text Color"
      />
    </div>

    {/* Buttons Row */}
    <div style={{ marginBottom: '10px' }}>
      <button onClick={addRectangle}>Add Rectangle</button>
      <button onClick={addCircle}>Add Circle</button>
      <button onClick={addTriangle}>Add Triangle</button>
      <button onClick={addPolygon}>Add Polygon</button>
      <button onClick={addText}>Add Text</button>
    </div>

    {/* Controls Row */}
    <div style={{ marginBottom: '10px' }}>
      <button onClick={bringForward}>Bring Forward</button>
      <button onClick={sendBackward}>Send Backward</button>
      <button onClick={deleteSelectedObject} style={{ color: 'red' }}>
        Delete
      </button>
      <button
        onClick={downloadCanvasAsImage}
        style={{ marginLeft: '20px', backgroundColor: '#4CAF50', color: 'white' }}
      >
        Download Image
      </button>
    </div>
    </div>

    {/* Canvas */}
  </div>
    <canvas ref={canvasRef} />
  </div>
);
};

export default Canvas;