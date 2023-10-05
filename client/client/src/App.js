import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import CreateBlogPost from './CreateBlogPost';
import BlogPosts from './BlogPosts';
import Login from './Login';
import Registration from './Registration';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  // Implement JWT token handling for user authentication here

  return (
    <Router>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={(props) => <Login {...props} setUser={setUser} />} />
        <Route path="/register" component={Registration} />
        <ProtectedRoute path="/create-blog" component={CreateBlogPost} user={user} />
        <Route path="/blog/:id" component={BlogPosts} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
