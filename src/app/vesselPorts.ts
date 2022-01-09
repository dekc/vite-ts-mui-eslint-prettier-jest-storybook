import { useQueryPorts } from '@/services/queryAdapter';

const useQuery = () => {
  const ports = useQueryPorts();

  return {
    getAllPorts: ports.getAllPorts,
    getPortByCode: ports.getPortByCode,
  };
};

export { useQuery };
