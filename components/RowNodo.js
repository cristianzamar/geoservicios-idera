let ultSuperior;
let classTd;

export default ({superior, datos})  => {

  //cambia estilo al cambiar el organismo superior
  ultSuperior !== superior &&
    (classTd = classTd ==='filas_oscuras' ? 'filas_claras' : 'filas_oscuras');

  return (
    <tr>
      <td className={ classTd }>
        { ultSuperior !== superior && (ultSuperior = superior) && superior }
      </td>

      <td className={ classTd }>{ datos.title }</td>

      <td className={ classTd }>
        { datos.wms && <a href={ datos.wms } target="_blank">WMS</a> }
        { datos.wfs && <a href={ datos.wfs } target="_blank"><br/>WFS</a> }
      </td>
    </tr>
  )
}
