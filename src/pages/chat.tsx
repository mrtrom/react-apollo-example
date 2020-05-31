import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type ChatProps = RouteComponentProps & {};

export default function Chat(props: ChatProps) {
  return (
    <>
      <p>Chat Page!</p>
    </>
  );
}
