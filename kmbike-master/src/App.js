import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './pages/Blog';
import NotFound from './components/NotFound';
import './styles/Bicicletas.css';

function App() {
  const Bicicletas = () => {
    const [bicicletas, setBicicletas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const responseBogota = await fetch('https://api.citybik.es/v2/networks/tembici-bogota');
          const responseEncicla = await fetch('https://api.citybik.es/v2/networks/encicla');

          const dataBogota = await responseBogota.json();
          const dataEncicla = await responseEncicla.json();

          const combinedData = [
            {
              id: dataBogota.network.id,
              name: dataBogota.network.name,
              city: dataBogota.network.location.city,
              country: dataBogota.network.location.country,
            },
            {
              id: dataEncicla.network.id,
              name: dataEncicla.network.name,
              city: dataEncicla.network.location.city,
              country: dataEncicla.network.location.country,
            },
          ];

          setBicicletas(combinedData);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <div>Cargando...</div>;
    }

    return (
      <div>
        <h1>Bicicletas en Colombia</h1>
        <div className="tarjetas-container">
          {bicicletas.map((bicicleta) => {
            const googleMapsLink =` https://www.google.com/maps?q=${bicicleta.city},${bicicleta.country}`
            return (
              <div key={bicicleta.id} className="tarjeta">
                <h2>{bicicleta.name}</h2>
                <p>
                  <strong>Ubicación:</strong> {bicicleta.city}, {bicicleta.country}
                </p>
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                  Ver en Google Maps
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bicicletas" element={<Bicicletas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;