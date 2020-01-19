import React, { Component } from 'react';
import './App.css';
import { Logo } from './components/header/logo';
import { Title_page } from './components/main-title/title-page';
import { Features } from './components/description/features';
import { Video } from './components/feature-video/video';
import { CTA_button } from './components/call-to-action/button';
import { Footer } from './components/footer/logo.footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Title_page />
        <Features />
        <Video />
        <CTA_button />
        <Footer />
      </div>
    );
  }
}

/**
 * App
|__Header
| |__Logo
|__Unique Value Proposition
| |__Description
|__Features
| |__Icons
| |__Selling points
|__Call To Action
| |__Button
|__Footer
| |__Logo
 */
export default App;
