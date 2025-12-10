"use client";

import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PdfDownloadButton({ targetRef }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!targetRef?.current || isLoading) return;
    setIsLoading(true);
    try {
      const canvas = await html2canvas(targetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#f4f8ff",
        windowWidth: targetRef.current.scrollWidth,
      });

      const imgData = canvas.toDataURL("image/png", 0.92);
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
        compress: true,
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height, undefined, "FAST");
      pdf.save("Alejandro-De-La-Mora-Resume.pdf");
    } catch (err) {
      console.error("PDF generation failed", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className="pdf-button" onClick={handleDownload} disabled={isLoading} aria-label="Download resume as PDF">
      {isLoading ? "Preparing PDF..." : "Download PDF"}
    </button>
  );
}
