import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarcodeScanner() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <BarcodeScannerComponent
        width={"90%"}
        height={"90%"}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default BarcodeScanner;
