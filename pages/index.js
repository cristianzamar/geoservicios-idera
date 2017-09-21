import Table from '../components/Table';
import geoservicios from '../data/sources.min.json'

export default () => (

  <div>
  {
  Object.keys(geoservicios).map( nivel => (
    <Table
      titulo={nivel}
      columna1='Ministerio'
      columna2='IDE'
      datos={geoservicios[nivel]}
    >
    </Table>
  ))
}
  </div>
)
