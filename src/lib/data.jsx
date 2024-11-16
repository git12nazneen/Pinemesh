import {  FaFacebookF, FaDiscord, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/campaign", label: "Campaign" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];


  export const footerData = [
    {
      title: "Categories",
      links: [
        "Nutrition and diet",
        "Fitness training",
        "Mindfulness",
        "Mental health",
        "Personal growth",
        "Social well-being",
      ],
    },
    {
      title: "About",
      links: ["About us", "Our partners", "Investors", "Career"],
    },
    {
      title: "Resources",
      links: [
        "FAQ",
        "Refund policies",
        "Terms and conditions",
        "Cookie",
        "Latest posts",
      ],
    },
    {
      title: "Support",
      links: ["Get in touch", "Visit our forum"],
    },
  ];

  export const socialMediaLinks = [
    { id: 1, name: "Instagram", url: "https://instagram.com", icon: <FaInstagramSquare /> },
    { id: 2, name: "Twitter", url: "https://twitter.com", icon: <FaTwitterSquare /> },
    { id: 3, name: "Facebook", url: "https://facebook.com", icon: <FaFacebookF /> },
    { id: 4, name: "Discord", url: "https://discord.com", icon: <FaDiscord /> },
  ];
  