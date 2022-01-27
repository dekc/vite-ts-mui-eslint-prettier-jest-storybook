import { pushStateLocationPlugin, servicesPlugin, UIRouterReact } from '@uirouter/react';

import { states } from './states';

const router = new UIRouterReact();

router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

states.forEach((state) => router.stateRegistry.register(state));

router.urlService.rules.initial({ state: 'home' });

import reqAuthHook from '@/ui/routes/config/requiredAuthHook';
router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, { priority: 10 });

export { router };
