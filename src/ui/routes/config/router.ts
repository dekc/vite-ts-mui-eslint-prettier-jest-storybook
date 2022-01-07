import { pushStateLocationPlugin, servicesPlugin, UIRouterReact } from '@uirouter/react';

import { states } from './states';

const router = new UIRouterReact();

router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

states.forEach((state) => router.stateRegistry.register(state));

router.urlService.rules.initial({ state: 'home' });

export { router };
