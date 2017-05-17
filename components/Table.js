import RowNodo from './RowNodo'

export default ({ titulo, columna1, columna2, datos }) => (
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
        <td className="Table_title_row">URL de servicio WMS/WFS<br/>
          <span style={{fontSize: "10px"}}>(copiar enlace con botón derecho del
            mouse)</span>
        </td>
      </tr>
      {
        //recorre nodos dentro del json
        Object.keys(datos).map( org => (
          datos[org].map( nodo =>
            <RowNodo superior={org} datos={nodo} />
          )
        ))
      }
    </tbody>

    <style jsx>{`
      table {
        width: 100%
      }
    `}</style>
  </table>
)
