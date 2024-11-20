const PATHS = {
  // Public routes (accessible without wallet connection)
  PUBLIC: {
    LANDING: "/",
    MARKETPLACE: "/marketplace",
    CONNECT_WALLET: "/connect-wallet",
  },

  // Protected routes (require wallet connection)
  PROTECTED: {
    DASHBOARD: "/dashboard",
    PREDICTIONS: "/predictions",
    CREATE_PREDICTION: "/predictions/create",
    NFT: "/nft",
    CREATE_NFT: "/nft/create",
    PROFILE: "/profile",
  },
};

export default PATHS;
