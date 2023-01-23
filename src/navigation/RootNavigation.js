
/* ----------------------------------------------------------------
Added This file for navigation will work from any where
Modified by - Abdul Sathar.M
Date - 08-OCT-2021
---------------------------------------------------------------- */

import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}