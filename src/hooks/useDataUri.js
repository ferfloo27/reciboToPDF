import html2pdf from 'html2pdf.js'
import { useEffect, useRef, useState } from 'react'

export function useDataUri({ recibo }) {
  const [pdfDataUri, setPdfDataUri] = useState(null)
  const contentRef = useRef()

  useEffect(() => {
    // Configurar las opciones de html2pdf
    const options = {
      margin: 0.1,
      filename: 'documento.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }

    // Usar html2pdf para generar el PDF
    html2pdf().from(contentRef.current).set(options).output('datauristring').then((pdfUri) => {
      setPdfDataUri(pdfUri) // Guardar el Data URI en el estado para la vista previa
    })
  }, [recibo])
  return { contentRef, pdfDataUri }
}
