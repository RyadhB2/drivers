import React, { useEffect, useState } from 'react';

import MainNavigator from './MainNavigator';

const AppNavigator: React.FC = () => {
  // const [loading, setLoading] = useState(true);

  // if (loading) return <Loader />
  return <MainNavigator />;
};

export default AppNavigator;
