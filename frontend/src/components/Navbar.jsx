import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

//Array of objects defining the menu structure
const menuItems = [
  { name: "Profile", link: "/profile" },
  { name: "Courses", link: "/courses" },
  {
    name: "Coaches Corner",
    submenu: [
      {name: "FAI Links", link: "/coaches-corner/files"},
      {
        name: "Formations",
        submenu: [
          { name: "5-a-side", link: "/coaches-corner/formations/5-a-side" },
          { name: "7-a-side", link: "/coaches-corner/formations/7-a-side" },
          { name: "9-a-side", link: "/coaches-corner/formations/9-a-side" },
        ],
      },
      {
        name: "Session Plans",
        submenu: [
          {
            name: "u8s-u9s",
            submenu: [
              { name: "Defending", link: "/coaches-corner/session-plans/u8s/defending" },
              { name: "Dribbling", link: "/coaches-corner/session-plans/u8s/dribbling" },
              { name: "Passing", link: "/coaches-corner/session-plans/u8s/passing" },
              { name: "Shooting", link: "/coaches-corner/session-plans/u8s/shooting" },
            ]
          },
          {
            name: "u10s-u11s",
            submenu: [
              { name: "Defending", link: "/coaches-corner/session-plans/u10s/defending" },
              { name: "Dribbling", link: "/coaches-corner/session-plans/u10s/dribbling" },
              { name: "Passing", link: "/coaches-corner/session-plans/u10s/passing" },
              { name: "Shooting", link: "/coaches-corner/session-plans/u10s/shooting" },
            ]
          },
          {
            name: "u12s",
            submenu: [
              { name: "Defending", link: "/coaches-corner/session-plans/u12s/defending" },
              { name: "Dribbling", link: "/coaches-corner/session-plans/u12s/dribbling" },
              { name: "Passing", link: "/coaches-corner/session-plans/u12s/passing" },
              { name: "Shooting", link: "/coaches-corner/session-plans/u12s/shooting" },
            ]
          }
        ]
      }
    ],
  },
  { name: "About", link: "/about" },
];
  
function Navbar() {
  //Function to recursively render menu items and their potential submenus
  const renderMenuItems = (items) => {
    //Error handling for non-array inputs
    if (!Array.isArray(items)) {
      console.error('Expected an array, but received:', items);
      return null;
  }
  //Maps each item to a list element. If an item has a 'link', it renders as a <Link>, otherwise, it's just text
  //If an item has a submenu, the function is recursively called to render the submenu inside a nested <ul>
  return items.map((item) => (
    <li key={item.name}>
      {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
      {item.submenu && Array.isArray(item.submenu) && (
        <ul>
          {renderMenuItems(item.submenu)}
        </ul>
      )}
    </li>
  ));
  };
  //The function returns a <nav> element containing the rendered menu items
  return (
    <nav>
      <ul>
        {renderMenuItems(menuItems)}
      </ul>
    </nav>
  );
}
  
export default Navbar;