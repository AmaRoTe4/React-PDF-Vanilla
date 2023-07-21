import React, { useEffect, useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

export default function RenderCompleto() {
  return (
    <div className="w-screen flex justify-center">
        <h1 className="font-bold max-w-[90%] text-justify">
        Esta va a tener que depender de un servicio de node que se conecta a la
        app por medios de: node-thermal-printer, el cual lo podes usar como una
        api y demas pero se tiene que gestionar, ya que las que hay son de pago, creer una api no es una locura pero se puediera ver como gestionar esto, se puede vender como servicio
        </h1>
    </div>
  );
}
