import Table from '../components/Table';
import idenacional from '../data/ide-nacional.json'

export default () => (
  <div>
    <Table
      titulo='IDE de jurisdicción nacional'
      columna1='Ministerio'
      columna2='IDE'
      datos={ idenacional }
    >
    </Table>
  </div>
)
