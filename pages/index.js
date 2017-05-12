import fetch from 'isomorphic-unfetch';
import Table from '../components/Table'

const Index = (props) => (
  
  <div>

      {
        Object.keys(props.sources).map(
          org => {

            props.sources[org].map(
            nodo => <p>{nodo.title}</p>
            )}
          )
      }

  </div>
)

Index.getInitialProps = async function() {
  let data;

  data = await fetch(
    'https://raw.githubusercontent.com/cristianzamar/geoservicios-idera/master/sources.json')
  .then(function(res) {
    return res.json()
  })

  return { sources: data }
}

export default Index
