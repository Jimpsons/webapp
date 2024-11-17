const PATHS = {
  // Public routes (accessible without wallet connection)
  LANDING: "/",
  MARKETPLACE: "/marketplace",

  // Auth routes
  CONNECT_WALLET: "/connect-wallet",

  // Protected routes (require waallet connection)
  DASHBOARD: "/dashboard",
  PREDICTIONS: "/predictions",
  CREATE_PREDICTION: "/predictions/create",
  NFT: "/nft",
  CREATE_NFT: "/nft/create",
  PROFILE: "/profile",
};

export default PATHS;
