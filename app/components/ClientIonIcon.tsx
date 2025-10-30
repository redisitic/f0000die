'use client';

import dynamic from 'next/dynamic';
import React from 'react';

type Props = any;

function IonIconImpl(props: Props) {
  // Stencil will upgrade this tag after mount.
  return React.createElement('ion-icon', props);
}

// Render nothing on the server; only mount on client to avoid SSR markup.
export default dynamic(() => Promise.resolve(IonIconImpl), { ssr: false });
