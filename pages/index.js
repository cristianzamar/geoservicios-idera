import fetch from 'isomorphic-unfetch';
import Table from '../components/Table';
import json from '../sources.json'

export default () => (
  <div>
    <Table
      titulo='Organismos Nacionales*'
      columna1='Ministerio Nacional'
      columna2='Organismo'
      datos={ json }
    >
    </Table>
  </div>
)
