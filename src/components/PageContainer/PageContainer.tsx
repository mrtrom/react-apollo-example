import React from 'react';

const Bar = {
  flexShrink: 0,
  height: 12,
  backgroundColor: '#000',
};

const Container = {
  display: 'flex',
  flexGrow: 1,
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
  padding: 8 * 3,
  paddingBottom: 8 * 5,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PageContainer(props: any) {
  return (
    <>
      <div style={Bar} />
      <div style={Container}>{props.children}</div>
    </>
  );
}
