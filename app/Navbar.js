"use client";

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Scholarships",
    "FAQ",
    "Contact",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="justify-start" maxWidth='full'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="ml-0">
          <Link href="/">
           <p className="font-bold text-inherit">AdmissionGeniuSG</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/scholarships" color="foreground">
            Scholarships
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/faq" color="foreground">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" color="foreground">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu style={{ backgroundColor: "#2E2E2E" }} motionProps="true">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item != "Home" ? `/${item.toLowerCase()}` : "/"}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
