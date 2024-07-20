import React, { useEffect, useState, createContext } from "react";

const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setState }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    }
  }, [loaded]);

  useEffect(() => {
    const initializeCloudinaryWidget = () => {
      if (loaded && window.cloudinary && window.cloudinary.createUploadWidget) {
        const myWidget = window.cloudinary.createUploadWidget(
          uwConfig,
          (error, result) => {
            if (!error && result && result.event === "success") {
              setState((prev) => [...prev, result.info.secure_url]);
            } else if (error) {
              console.error("Upload Widget Error:", error);
            }
          }
        );

        document.getElementById("upload_widget").addEventListener(
          "click",
          function () {
            myWidget.open();
          },
          false
        );
      }
    };

    if (loaded) {
      initializeCloudinaryWidget();
    }
  }, [loaded, uwConfig, setState]);

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
