// eslint-disable-next-line simple-import-sort/imports
import { useApolloClient, gql } from '@apollo/client';

import { VesselPort } from '@/domain/VesselPort';
import { QueryService } from '@/app/ports';

type VesselPortsQueryRes = {
  ports: Array<VesselPort>;
};

const useQueryPorts = (): QueryService => {
  const apolloClient = useApolloClient();

  const getAllPorts = async () => {
    const query = gql`
      query GetAllPorts {
        ports: biofouling_Port {
          PortName
          PortCode
          Location
        }
      }
    `;

    const { data } = await apolloClient.query<VesselPortsQueryRes>({
      query,
    });

    return data.ports;
  };

  const getPortByCode = async (portCode: string) => {
    const query = gql`
      query GetPortByCode($portCode: String!) {
        ports: biofouling_Port(where: { PortCode: { _eq: $portCode } }) {
          PortName
          PortCode
          Location
        }
      }
    `;

    const variables = { portCode };
    const { data } = await apolloClient.query<VesselPortsQueryRes>({
      query,
      variables,
    });

    return data.ports;
  };

  return {
    getAllPorts,
    getPortByCode,
  };
};

export { useQueryPorts };
