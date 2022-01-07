import { Home } from '@/ui/Home';
import { Login } from '@/ui/Login';

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

const states = [home, login];

export { states };
