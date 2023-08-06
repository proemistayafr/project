'use client'

import { useState, useCallback, useRef } from "react";
import Webcam from "react-webcam";


const CustomWebcam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [generatedText, setGeneratedText] = useState(null);
  const [facingMode, setFacingMode] = useState("user");

  const retake = () => {
    setImgSrc(null);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const switchCamera = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"));
  };


  const detectLandmark = async () => {
    try {
      const formData = new FormData();
      formData.append("file", dataURItoBlob(imgSrc));

      const response = await axios.post("http://localhost:8000/detect-landmark", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data && response.data.text) {
        setGeneratedText(response.data.text);
      }
    } catch (error) {
      console.error("Error while detecting landmark:", error);
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImgSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-black">
      <div className="mb-4">
        {imgSrc ? (
          <img className="rounded" src={imgSrc} alt="webcam" style={{ maxWidth: "100%" }} />
        ) : (
          <Webcam
            className="rounded"
            height={400}
            width={600}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            screenshotQuality={0.8}
            videoConstraints={{
              facingMode: facingMode,
            }}
          />
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mb-4">
        <button
          className="btn-switch-camera text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 md:mr-2 md:mb-0 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={switchCamera}
        >
          Switch Camera
        </button>

        {imgSrc ? (
          <button
            className="btn-retake-photo text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 md:mr-2 md:mb-0 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={retake}
          >
            Retake photo
          </button>
        ) : (
          <button
            className="btn-capture-photo text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 md:mr-2 md:mb-0 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={capture}
          >
            Capture photo
          </button>
        )}

        <button
          className="btn-generate-zertteik text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={detectLandmark}
        >
          Zertteik
        </button>
      </div>

      {generatedText && (
        <div className="bg-gray-200 p-4 rounded-lg mt-4 max-w-lg">
          <p className="text-gray-800">{generatedText}</p>
        </div>
      )}

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size"></label>
        <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" onChange={uploadImage} />
      </div>
    </div>
  );
};

export default CustomWebcam;