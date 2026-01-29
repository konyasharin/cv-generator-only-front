import { FC, ReactNode, useMemo } from 'react';
import { Route as LibRoute, Routes as LibRoutes } from 'react-router-dom';

interface RoutesProps {
  config: Record<string, ReactNode>;
}

export const Routes: FC<RoutesProps> = props => {
  const routesList = useMemo(() => {
    const paths = Object.keys(props.config);

    return Object.values(props.config).map((page, idx) => {
      return <LibRoute path={paths[idx]} element={page} key={idx} />;
    });
  }, [props.config]);

  return <LibRoutes>{routesList}</LibRoutes>;
};
