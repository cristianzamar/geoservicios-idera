import fetch from 'isomorphic-unfetch';
import Table from '../components/Table';
import json from '../sources.json'

// const Index = () => (
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

// Index.getInitialProps = async function() {
//   // let data;
//
//   console.log(json);
//
//   // data = await fetch(
//   //   'https://raw.githubusercontent.com/cristianzamar/geoservicios-idera/master/sources.json')
//   // .then(function(res) {
//   //   return res.json()
//   // })
//
// // console.log(data);
//
//   return { sources: json }
// }

//export default Index
