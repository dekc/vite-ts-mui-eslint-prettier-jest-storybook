import { About } from '@/ui/About';
import { Home } from '@/ui/Home';
import { Login } from '@/ui/Login';
import { WorldPorts } from '@/ui/WorldPorts';

const home = {
  name: 'home',
  url: '/home',
  component: Home,
};

const login = {
  name: 'login',
  url: '/login',
  component: Login,
};

const ports = {
  name: 'ports',
  url: '/ports',
  component: WorldPorts,
};

const about = {
  name: 'about',
  url: '/about',
  component: About,
};

const states = [home, login, ports, about];

export { states };
