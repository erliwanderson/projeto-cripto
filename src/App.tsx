import {router} from './routes'
import {RouterProvider} from 'react-router-dom'
function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;


//https://coinlib.io/api/v1/coinlist?key=418f0f2d7e92de8b&pref