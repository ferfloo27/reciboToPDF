import './App.css'
import { useDataUri } from './hooks/useDataUri'
import { useState } from 'react'
export function App () {
  const [recibo, setRecibo] = useState({
    nombreEmpresa: '',
    monto: '',
    concepto: '',
    fecha: '',
    nombreEmisor: '',
    nombreReceptor: ''
  })
  const { pdfDataUri, contentRef } = useDataUri({ recibo })

  return (
    <>
      <header>
        <h1>ReciboToPDF</h1>

      </header>
      <main>
        <div id='contenido-principal' className='contenedor-principal'>
          <section id='left' className='left'>
            <form ref={contentRef} action='' className='form-recibo' method='get'>
              <fieldset>
                <div className='primer-seccion'>
                  <div className='grupo-entrada'>
                    {/* <label htmlFor='nombreEmpresa'>Nombre de la Empresa:</label> */}
                    <textarea
                      rows={3} id='nombreEmpresa' value={recibo.nombreEmpresa}
                      onChange={(e) => setRecibo({ ...recibo, nombreEmpresa: e.target.value })} type='text' placeholder='FUERZA AEREA BOLIVIANA '
                    />
                  </div>
                  <div className='grupo-entrada'>
                    {/* <label htmlFor='monto'>Monto:</label> */}
                    <input
                      id='monto' type='number'
                      placeholder='Bs. 40.0'
                      value={recibo.monto}
                      onChange={(e) => setRecibo({ ...recibo, monto: e.target.value })}
                    />
                  </div>
                </div>
                <div className='segunda-seccion'>
                  <h2 className='recibo'>RECIBO</h2>
                  <p className='nro'>N° 0/2024</p>
                </div>
                <div className='tercera-seccion'>
                  <p>Recibo de:
                    <input
                      id='nombreEmisor' type='text'
                      value={recibo.nombreEmisor}
                      onChange={(e) => setRecibo({ ...recibo, nombreEmisor: e.target.value })}
                      placeholder='Juan Calle Gutierrez'
                    />
                  </p>
                  <p>La suma de:
                    <input
                      id='monto' type='number'
                      placeholder='Bs. 40.0'
                      value={recibo.monto}
                      onChange={(e) => setRecibo({ ...recibo, monto: e.target.value })}
                    />
                  </p>
                  <p>Por concepto de : <textarea
                    type='text' value={recibo.concepto}
                    onChange={(e) => setRecibo({ ...recibo, concepto: e.target.value })} className='concepto'
                                       />
                  </p>
                </div>
                <div className='cuarta-seccion'>
                  <p>Cochabamba
                    <input id='fecha' type='date' />
                  </p>
                </div>
                <div className='quinta-seccion'>
                  <div className='nombres'>
                    <p>ENTREGE CONFORME</p>
                    <input
                      id='nombreEmisor' type='text'
                      value={recibo.nombreEmisor}
                      onChange={(e) => setRecibo({ ...recibo, nombreEmisor: e.target.value })}
                      placeholder='Juan Calle Gutierrez'
                    />
                  </div>
                  <div className='nombres'>
                    <p>RECIBE CONFORME</p>
                    <input
                      id='nombreReceptor' type='text'
                      value={recibo.nombreReceptor}
                      onChange={(e) => setRecibo({ ...recibo, nombreReceptor: e.target.value })}
                      placeholder='Fernando Calle Gonzales'
                    />
                  </div>
                </div>

              </fieldset>
            </form>
          </section>
          <section className='right'>
            {pdfDataUri &&
              <div id='vistaPrevia'>
                <iframe title='Vista Previa' src={pdfDataUri} id='pdfPreview' width='100%' height='100%' className='pdfPreview' />
              </div>}

          </section>
        </div>
      </main>
    </>
  )
}
