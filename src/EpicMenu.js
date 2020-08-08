import React, { Component } from 'react';
import './EpicMenu.css';
import { Link } from "@reach/router";


class EpicMenu extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        let searchForm = this.state.showForm ? (
          <form className="menu__search-form" method="POST">
              <label htmlFor="userEmail" className="block">
          <input className="menu__search-input" text="hello" placeholder="username"
          id ="email"/>
          </label>
          
          <label htmlFor="userPassword" className="block">
          
         <input className="menu__search-field" text="hello" placeholder="password" 
         id="password"/>
         </label>
          
          <button className="button">Submit</button>
          <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="./SignUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{""}
          </p>
        
          
          </form>
        ) : '';

        
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
                }} className="menu__logo">#</h1>

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>

                    <button onClick={this.showForm.bind(this)} style={{
                    backgroundImage: 'url(' +  + ')'
                    }} className="menu__search-button">Login</button>

                    {searchForm}
                </div>
            </nav>
        );
    }
}

export default EpicMenu;
