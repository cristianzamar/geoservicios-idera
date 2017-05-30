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
        {
          datos.viewer &&
            <a href={ datos.viewer } title="abrir link" target="_blank">
              <i class="fa fa-map-o" aria-hidden="true"></i>
            </a>
        }
      </td>

      <td className={ classTd }>
        { datos.wms && <a href={ datos.wms } target="_blank">WMS</a> }
        { datos.wfs && <a href={ datos.wfs } target="_blank"><br/>WFS</a> }
        { datos.csw && <a href={ datos.csw } target="_blank"><br/>CSW</a> }
      </td>

      <td className={ classTd }>
        {
          datos.catalog &&
            <a href={ datos.catalog } title="abrir link" target="_blank">
              <i class="fa fa-database" aria-hidden="true"></i>
            </a>
        }
      </td>

      <td className={ classTd }>
        {
          datos.portal &&
            <a href={ datos.portal } title="abrir link" target="_blank">
              <i class="fa fa-download" aria-hidden="true"></i>
            </a>
        }
      </td>
    </tr>
  )
}
