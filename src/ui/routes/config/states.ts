import App from '@/App';
import { About } from '@/ui/About';
import { Home } from '@/ui/Home';
import { Login } from '@/ui/Login';
import { WorldPorts } from '@/ui/WorldPorts';

const app = {
  name: 'app',
  redirectTo: 'home',
  component: App,
};

const home = {
  parent: 'app',
  name: 'home',
  url: '/home',
  component: Home,
};

const login = {
  parent: 'app',
  name: 'login',
  url: '/login',
  component: Login,
};

const ports = {
  parent: 'app',
  name: 'ports',
  url: '/ports',
  data: { requiredAuth: true },
  component: WorldPorts,
};

const about = {
  parent: 'app',
  name: 'about',
  url: '/about',
  component: About,
};

const states = [app, home, login, ports, about];

export { states };
