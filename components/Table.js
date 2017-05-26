import RowNodo from './RowNodo'

export default ({ titulo, columna1, columna2, datos }) => (
  <div>
    <table>
      <thead>
        <tr>
          <td className="Table_titular" colSpan="3">{ titulo }</td>
        </tr>
      </thead>

      <tbody>
        <tr style={{textAlign: "left"}}>
          <td className="Table_title_row">{ columna1 }</td>
          <td className="Table_title_row">{ columna2 }</td>
          <td className="Table_title_row">Mapa Interactivo</td>
          <td className="Table_title_row">Geoservicios<br/>
            <span style={{fontSize: "10px"}}>(copiar enlace con botón derecho
              del mouse)</span>
          </td>
          <td className="Table_title_row">Catálogo</td>
          <td className="Table_title_row">Portal de datos abiertos</td>
        </tr>
        {
          //recorre nodos dentro del json
          Object.keys(datos).map( org => (
            datos[org].map( nodo =>
              <RowNodo superior={org} datos={nodo} />
            )
          ))
        }
        <tr><td className="pie_tabla" colSpan="3">IDERA</td></tr>
      </tbody>
    </table>

    <p>
      <em>*ATENCION: Las URL de servicios, son para ser incluidas en sus
        respectivas aplicaciones SIG (para visualizarlas debes copiarlas y
        pegarlas en tu aplicación).</em>
    </p>

    <style jsx>{`
      table {
        width: 100%
      }

      p {
        font-size: 10px;
        font-style: italic;
      }
    `}</style>
  </div>

)
