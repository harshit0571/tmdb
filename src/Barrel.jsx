import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./pages/Movie";
import PersonWrapper from "./wrapper/PersonWrapper";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import Bookmark from "./pages/Bookmark";
import BookmarksProvider from "./context/BookmarksContext";
import Favourites from "./pages/Favourites";
import FavoritesProvider from "./context/FavouritesContext";
import TV from "./pages/TV";

export  {
  React,
  Route,
  Routes,
  Router,
  useLocation,
  Home,
  Navbar,
  Footer,
  Movie,
  PersonWrapper,
  Login,
  AuthProvider,
  Bookmark,
  BookmarksProvider,
  Favourites,
  FavoritesProvider,
  TV,
};
