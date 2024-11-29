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
    const [error, setError] = useState(null);
    const [filtroBogota, setFiltroBogota] = useState(''); // Selector para Bogotá
    const [filtroMedellin, setFiltroMedellin] = useState(''); // Selector para Medellín

    useEffect(() => {
      const fetchData = async () => {
        try {
          const [responseBogota, responseEncicla] = await Promise.all([
            fetch('https://api.citybik.es/v2/networks/tembici-bogota'),
            fetch('https://api.citybik.es/v2/networks/encicla'),
          ]);

          if (!responseBogota.ok || !responseEncicla.ok) {
            throw new Error(`Error en las solicitudes: ${responseBogota.status} ${responseEncicla.status}`);
          }

          const dataBogota = await responseBogota.json();
          const dataEncicla = await responseEncicla.json();

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
          setError(err.message);
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

    // Obtener opciones para los selectores
    const opcionesBogota = estaciones
      .filter((estacion) => estacion.city === "Bogotá")
      .map((estacion) => estacion.name);

    const opcionesMedellin = estaciones
      .filter((estacion) => estacion.city === "Medellín")
      .map((estacion) => estacion.name);

    // Filtrar estaciones según los selectores
    const estacionesFiltradas = estaciones.filter((estacion) => {
      if (filtroBogota) {
        return estacion.city === "Bogotá" && estacion.name === filtroBogota;
      }
      if (filtroMedellin) {
        return estacion.city === "Medellín" && estacion.name === filtroMedellin;
      }
      return true; // Si no hay filtro, mostrar todas
    });

    return (
      <div>
        <h1>Bicicletas en Bogotá y Medellín</h1>

        {/* Selectores */}
        <div className="filtros">
          <div>
            <label htmlFor="select-bogota">Seleccionar en Bogotá:</label>
            <select
              id="select-bogota"
              value={filtroBogota}
              onChange={(e) => {
                setFiltroBogota(e.target.value);
                setFiltroMedellin(''); // Limpiar selección de Medellín
              }}
            >
              <option value="">Seleccione una estación</option>
              {opcionesBogota.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="select-medellin">Seleccionar en Medellín:</label>
            <select
              id="select-medellin"
              value={filtroMedellin}
              onChange={(e) => {
                setFiltroMedellin(e.target.value);
                setFiltroBogota(''); // Limpiar selección de Bogotá
              }}
            >
              <option value="">Seleccione una estación</option>
              {opcionesMedellin.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="tarjetas-container">
          {estacionesFiltradas.map((estacion) => (
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
