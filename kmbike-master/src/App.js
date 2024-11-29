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
    const [estaciones, setEstaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Para manejar errores

    useEffect(() => {
      const fetchData = async () => {
        try {
          const [responseBogota, responseEncicla] = await Promise.all([
            fetch('https://api.citybik.es/v2/networks/tembici-bogota'),
            fetch('https://api.citybik.es/v2/networks/encicla'),
          ]);

          // Verificar si las respuestas son exitosas
          if (!responseBogota.ok || !responseEncicla.ok) {
            throw new Error(`Error en las solicitudes: ${responseBogota.status} ${responseEncicla.status}`);
          }

          const dataBogota = await responseBogota.json();
          const dataEncicla = await responseEncicla.json();

          // Combina las estaciones de ambas ciudades
          const estacionesBogota = dataBogota.network.stations.map((station) => ({
            id: station.id,
            name: station.name,
            city: "Bogotá",
            country: "Colombia",
            latitude: station.latitude,
            longitude: station.longitude,
          }));

          const estacionesMedellin = dataEncicla.network.stations.map((station) => ({
            id: station.id,
            name: station.name,
            city: "Medellín",
            country: "Colombia",
            latitude: station.latitude,
            longitude: station.longitude,
          }));

          setEstaciones([...estacionesBogota, ...estacionesMedellin]);
        } catch (err) {
          setError(err.message); // Guardar el mensaje de error
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <div>Cargando...</div>;
    }

    if (error) {
      return <div>Error al cargar los datos: {error}</div>;
    }

    return (
      <div>
        <h1>Bicicletas en Bogotá y Medellín</h1>
        <div className="tarjetas-container">
          {estaciones.map((estacion) => (
            <div key={estacion.id} className="tarjeta">
              <h2>{estacion.name}</h2>
              <p>
                <strong>Ciudad:</strong> {estacion.city}
              </p>
              <p>
                <strong>País:</strong> {estacion.country}
              </p>
              <a
                href={`https://www.google.com/maps?q=${estacion.latitude},${estacion.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en Google Maps
              </a>
            </div>
          ))}
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
