import React from 'react'
import PostList from './PostList'
import './App.css'

const App = () => {
  return (
    <div>
      <div class='ui large top fixed hidden menu'>
        <div class='ui container'>
          <a href='./' class='active item'>
            Home
          </a>
          <a href='./' class='item'>
            Work
          </a>
          <a href='./' class='item'>
            Company
          </a>
          <a href='./' class='item'>
            Careers
          </a>
          <div class='right menu'>
            <div class='item'>
              <a href='./' class='ui button'>
                Log in
              </a>
            </div>
            <div class='item'>
              <a href='./' class='ui primary button'>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class='ui vertical inverted sidebar menu'>
        <a href='./' class='active item'>
          Home
        </a>
        <a href='./' class='item'>
          Work
        </a>
        <a href='./' class='item'>
          Company
        </a>
        <a href='./' class='item'>
          Careers
        </a>
        <a href='./' class='item'>
          Login
        </a>
        <a href='./' class='item'>
          Signup
        </a>
      </div>

      <div class='pusher'>
        <div class='ui inverted vertical masthead center aligned segment'>
          <div class='ui container'>
            <div class='ui large secondary inverted pointing menu'>
              <a href='./' class='toc item'>
                <i class='sidebar icon'></i>
              </a>
              <a href='./' class='active item'>
                Home
              </a>
              <a href='./' class='item'>
                Work
              </a>
              <a href='./' class='item'>
                Company
              </a>
              <a href='./' class='item'>
                Careers
              </a>
              <div class='right item'>
                <a href='./' class='ui inverted button'>
                  Log in
                </a>
                <a href='./' class='ui inverted button'>
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          <div class='ui text container'>
            <h1 class='ui inverted header'>Imagine-a-Lorum-BlogFeed</h1>
            <h2>Do whatever you want when you want with Semantic UI!</h2>
          </div>
        </div>

        <div class='ui vertical stripe segment'>
          <div class='ui text container'>
            <PostList />
          </div>
        </div>

        <div class='ui inverted vertical footer segment'>
          <div class='ui container'>
            <div class='ui stackable inverted divided equal height stackable grid'>
              <div class='three wide column'>
                <h4 class='ui inverted header'>About</h4>
                <div class='ui inverted link list'>
                  <a href='./' class='item'>
                    Sitemap
                  </a>
                  <a href='./' class='item'>
                    Contact Us
                  </a>
                  <a href='./' class='item'>
                    Religious Ceremonies
                  </a>
                  <a href='./' class='item'>
                    Gazebo Plans
                  </a>
                </div>
              </div>
              <div class='three wide column'>
                <h4 class='ui inverted header'>Services</h4>
                <div class='ui inverted link list'>
                  <a href='./' class='item'>
                    Banana Pre-Order
                  </a>
                  <a href='./' class='item'>
                    DNA FAQ
                  </a>
                  <a href='./' class='item'>
                    How To Access
                  </a>
                  <a href='./' class='item'>
                    Favorite X-Men
                  </a>
                </div>
              </div>
              <div class='seven wide column'>
                <h4 class='ui inverted header'>Footer Header</h4>
                <p>UI with Semantic UI and feed by JsonPlaceholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
