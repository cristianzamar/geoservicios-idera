let ultSuperior;

export default ({superior, datos})  => (
  <tr>
    <td>{ ultSuperior !== superior && (ultSuperior = superior) && superior }</td>
    <td>{ datos.title }</td>
    <td>
      {datos.wms && <a href={datos.wms} target="_blank">WMS</a>}
      {datos.wfs && <a href={datos.wfs} target="_blank">WFS</a>}
    </td>

  </tr>
)
