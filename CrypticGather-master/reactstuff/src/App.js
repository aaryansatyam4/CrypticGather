import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout'; // Import the Logout component
import './App.css';

const projectID = 'ca01df17-4f50-4903-a17c-e87bb211f8c5';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <>
      <Logout /> {/* Render the Logout component */}
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </>
  );
};

export default App;
