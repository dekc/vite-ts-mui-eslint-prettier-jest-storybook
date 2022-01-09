import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { useQuery } from '@/app/vesselPorts';
import { VesselPort } from '@/domain/VesselPort';

import { drawMap } from './drawmap';

const WorldPorts = () => {
  const query = useQuery();
  const [ports, setPorts] = useState<Array<VesselPort>>([]);
  const [loading, setLoading] = useState(false);
  const [numPorts, setNumPorts] = useState<number>(0);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    const getAllPorts = async () => {
      const ports = await query.getAllPorts();

      setPorts(ports || []);
      setLoading(false);
    };
    getAllPorts();
  }, []);

  useEffect(() => {
    if (ports.length > 0) {
      setNumPorts(ports.length);
      drawMap(mapRef, ports);
    }
  }, [ports]);

  if (loading) {
    return <h6>Loading...</h6>;
  }

  return (
    <Box flexDirection="column">
      <div id="tooltip" className="tooltip">
        <div className="tooltip-location" id="port-location"></div>
        <div className="tooltip-port-code">
          Port Code: <span id="port-code"></span>
        </div>
      </div>
      <div>
        <p>Total ports: {numPorts} </p>
      </div>
      <div ref={mapRef} className="map" />
    </Box>
  );
};

export { WorldPorts };
