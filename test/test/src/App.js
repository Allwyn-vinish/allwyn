import logo from './logo.svg';
import './App.css';
import { sha256HashingGenerator } from './common/common-utils';
import Nifis from './tests';
var axios = require('axios');
function App() {
  // const callRequest = async () => {
    
  //   var data = JSON.stringify({
  //     "data": [
  //         {
  //             "db_name": "raj_db_new",
  //             "entity": "partner_collection",
  //             "doc": {
  //                 "firstName": "Mytheen",
  //                 "lastname": "S"
  //             },
  //             "keycloak" : "created_by"
  //         }
  //     ],
  //     "auth": {
  //         "token" : "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJJR0gxVE1FMXlzX1hZSnNWcEVpXzZIZHAydXRrMGtJUzRSMjhLNlJ5ZDFjIn0"
  //     },
  //     "notify": {},
  //     "filestore": {}
  // });

  //   var config = {
  //     method: 'POST',
  //     url: 'http://164.52.208.60:10012/api/upsertDoc',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJJR0gxVE1FMXlzX1hZSnNWcEVpXzZIZHAydXRrMGtJUzRSMjhLNlJ5ZDFjIn0.eyJleHAiOjE2MTM4MTc4NDgsImlhdCI6MTYxMzgxNzU0OCwianRpIjoiZjA3NTEzZjctYzYzNy00OTZmLThiMDUtNDFmMjUyYTc1Y2JiIiwiaXNzIjoiaHR0cDovLzE2Ny43MS4yMjguMTE2OjgwODkvYXV0aC9yZWFsbXMvbWMtY2xvYWsiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYmEwZTc2ZGMtM2ZlOC00ZjQxLThjMDgtNWMwNWNhMmY0YTk3IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibmlmaS1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiODUyYzRjYmItMmRhNy00OWE2LThlNGItMzkyMDgzMmU4NDg5IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJNeXRoZWVuIFMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2aWFleG1haWxAZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6Ik15dGhlZW4iLCJmYW1pbHlfbmFtZSI6IlMiLCJlbWFpbCI6InZpYWV4bWFpbEBnbWFpbC5jb20ifQ.B4P_4lWkCp7mqIBGATuUAvaIokDMISsXcFOwIaIYKFEiWMoPXVIQ_JjkesOzpudmh1aORMG0Z5xYRH2YxtcC19Adp7vdGkq7tDT3GbsffGoGPyHH6QUuC_Yg2ronARL4v3VU-6dcHvni6IezvomXB-Y8mBQEO7FblYyz00aLqr411Y9MHvdo2Af2JcfrFfFToIK-gQWSuTKgOQUCzGFAYTXKocauKEoAPWdhg6JSgrggz1KfiK0YzGuRYhJDQkdYd7rBM1goeHcaxdYBBzEjgxgbbPIWi41vhxHAUFAQdhXK5kBD7ohi6RXrRYtzM6aYH9V8P-O8RcPPpd-47FJ4Xw'
  //     },
  //     data: data
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       {/* <button onClick={() => callRequest()}>Api request </button> */}
        {/* <button onClick={() => sha256HashingGenerator()}>Checksum Generator</button> */}
        <Nifis/>
      </header>
    </div>
  );
}

export default App;
