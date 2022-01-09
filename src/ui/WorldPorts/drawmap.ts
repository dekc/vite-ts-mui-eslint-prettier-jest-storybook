/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';

import * as d3 from 'd3';
import { GeoSphere } from 'd3';
// import Waterman from 'd3-geo-polygon';
import { FeatureCollection } from 'geojson';
import { RefObject } from 'react';

type PortLocation = {
  PortName: string;
  PortCode: string;
  Location: [number, number] | null;
};

const getCountries = async () => d3.json<FeatureCollection>('https://www.eco-nautic.net/world-countries-10m.geo.json');

const drawMap = async (mapRef: RefObject<HTMLDivElement>, ports: any) => {
  const dimensions = {
    width: window.innerWidth * 0.9,
    height: 0,
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
    boundedWidth: 0,
    boundedHeight: 0,
  };

  const countryGeom = await getCountries();
  if (!countryGeom) return;

  // const countryNameAccessor = (d: Feature | null) => d?.properties?.ADMIN;
  // const countryISOAccessor = (d: Feature | null) => d?.properties?.ISO_A3;

  const tooltip = d3.select('#tooltip');
  function onMouseEnter(event: any, portData: PortLocation) {
    tooltip.style('opacity', 1);
    tooltip.select('#port-location').text(portData.PortName);
    tooltip.select('#port-code').text(portData.PortCode);
  }

  function onMouseLeave() {
    tooltip.style('opacity', 0);
  }

  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;

  const sphere: GeoSphere = { type: 'Sphere' };

  const projection = d3.geoEqualEarth().fitWidth(dimensions.boundedWidth, sphere);

  const pathGenerator = d3.geoPath(projection);
  // eslint-disable-next-line no-unused-vars
  const [[x0, y0], [x1, y1]] = pathGenerator.bounds(sphere);
  dimensions.boundedHeight = y1;
  dimensions.height = dimensions.boundedHeight + dimensions.margin.top + dimensions.margin.bottom;

  const container = d3.select(mapRef.current);
  const wrapper = container.append('svg').attr('width', dimensions.width).attr('height', dimensions.height);
  const g = wrapper.append('g');
  const bounds = g.append('g').style('transform', `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`);

  // bounds
  //   .append('defs')
  //   .append('clipPath')
  //   .attr('id', 'bounds-clip-path')
  //   .append('path')
  //   .attr('class', 'earth-clip-path');

  bounds.append('path').attr('class', 'earth').attr('d', pathGenerator(sphere));

  bounds.append('path').attr('class', 'graticule');

  const graticuleJson = d3.geoGraticule10();
  const graticule = bounds.append('path').attr('class', 'graticule').attr('d', pathGenerator(graticuleJson));

  const zoom = d3
    .zoom<SVGSVGElement, unknown>()
    .scaleExtent([1, 250])
    .on('zoom', function (event: any) {
      g.attr('transform', event.transform);
      graticule.attr('stroke-width', 1 / event.transform.k);
      d3.selectAll('.port')
        .attr('r', 5 / event.transform.k)
        .attr('stroke-width', 1 / event.transform.k);
    });

  wrapper.call(zoom);

  const countries = bounds
    .selectAll('.country')
    .data(countryGeom.features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', (d) => pathGenerator(d));

  countries.exit().remove();

  if (ports.length > 0) {
    // console.log(ports);
    const portLocations: PortLocation[] = [];
    ports.map((port: any) => {
      if (port.Location) {
        portLocations.push({
          Location: projection(port.Location.coordinates),
          PortCode: port.PortCode,
          PortName: port.PortName,
        });
      }
    });
    // console.log(portLocations);

    const portShapes = bounds
      .selectAll('.port')
      .data(portLocations)
      .enter()
      .append('circle')
      .attr('class', 'port')
      .attr('cx', (d: any) => d.Location[0])
      .attr('cy', (d: any) => d.Location[1])
      .attr('r', '5')
      .attr('stroke', 'white')
      .attr('stroke-width', 1)
      .attr('fill', 'red');

    portShapes.exit().remove();

    portShapes.on('mouseenter', onMouseEnter).on('mouseleave', onMouseLeave);
  }
};

export { drawMap, getCountries };
