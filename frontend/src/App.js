import logo from './logo.svg';
import './App.css';
import React from "react";
import CardsPage from "./components/CardsPage";

function App() {
     // Replace 1 with the topic id you want, and 123456 with the Telegram user id after login.
  return (
  <CardsPage topicId={2} telegramUserId={123456} />
  );
}

export default App;

