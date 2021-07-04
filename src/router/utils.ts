import { Location, State } from 'history';

type Props = {
  location: Location<State>;
};

export function locationToRoute({ location }: Props) {
  return {
    path: location.pathname,
    hash: location.hash,
    query: location.search,
  };
}