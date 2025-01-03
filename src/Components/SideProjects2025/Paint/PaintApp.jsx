import React, { useRef, useState, useEffect } from "react";

const PaintApp = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState("brush");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [fileName, setFileName] = useState("my-drawing");
  const [fileFormat, setFileFormat] = useState("png");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e) => {
    const coords = getCoordinates(e);
    const ctx = canvasRef.current.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const coords = getCoordinates(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = `${fileName}.${fileFormat}`;
    link.href = canvas.toDataURL(`image/${fileFormat}`);
    link.click();
    setShowSaveModal(false);
  };

  const colors = [
    "#000000",
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c}
                className="w-8 h-8 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              className={`p-2 rounded font-medium text-gray-700 ${
                tool === "brush" ? "bg-blue-100" : "bg-gray-100"
              }`}
              onClick={() => setTool("brush")}
            >
              Brush
            </button>
            <button
              className={`p-2 rounded font-medium text-gray-700 ${
                tool === "eraser" ? "bg-blue-100" : "bg-gray-100"
              }`}
              onClick={() => setTool("eraser")}
            >
              Erase
            </button>
            <button
              className="p-2 rounded bg-gray-100 font-medium text-gray-700"
              onClick={clearCanvas}
            >
              Clear
            </button>
            <button
              className="p-2 rounded bg-green-100 font-medium text-gray-700"
              onClick={() => setShowSaveModal(true)}
            >
              Save
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
              className="w-32"
            />
            <span className="text-sm text-gray-500">{brushSize}px</span>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="border border-gray-300 rounded cursor-crosshair bg-white"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>

      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl text-gray-800 font-medium mb-6">
              Save Drawing
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  File Name
                </label>
                <input
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
                  placeholder="Enter file name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  File Format
                </label>
                <select
                  value={fileFormat}
                  onChange={(e) => setFileFormat(e.target.value)}
                  className="w-full p-2 bg-indigo-700 text-white rounded cursor-pointer"
                >
                  <option value="png">PNG</option>
                  <option value="jpeg">JPEG</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  className="min-w-[70px] flex justify-center items-center px-3 py-1.5 bg-gray-100 rounded text-gray-600"
                  onClick={() => setShowSaveModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="min-w-[70px] flex justify-center items-center px-3 py-1.5 bg-emerald-400 rounded text-white"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaintApp;
