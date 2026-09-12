import { createStandaloneApplication } from './standalone/application.js';
import { describeError } from './standalone/errors.js';

// Check user's localStorage first (BYOK support for web deployment), fallback to build/env.
const localCesium = typeof localStorage !== 'undefined' ? localStorage.getItem('gev_cesium_token') : null;
const localGoogle = typeof localStorage !== 'undefined' ? localStorage.getItem('gev_google_maps_key') : null;

const application = createStandaloneApplication({
  googleApiKey: (localGoogle && localGoogle.trim()) || import.meta.env.GOOGLE_MAPS_API_KEY || '',
  cesiumToken: (localCesium && localCesium.trim()) || import.meta.env.CESIUM_ION_TOKEN || '',
  allowQaRegistration: import.meta.env.DEV,
});

application.start().catch((error) => {
  console.error("God's Eye View initialization failed:", error);
  const loaderStatus = document.querySelector('#loading-screen .loader-status');
  loaderStatus.textContent = `Error: ${describeError(error)}`;
  loaderStatus.style.color = '#ff4444';
});

export { application };
