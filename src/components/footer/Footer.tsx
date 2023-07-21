import React from "react";
import classes from "./Footer.module.scss";
import FooterList from "./FooterList/FooterList";

const FOOTER_LIST_FIRST_DATA = {
  title: "Menu Items",
  links: ["About", "Blog", "Shop", "Contact us"],
};
const FOOTER_LIST_SECOND_DATA = {
  title: "Other Pages",
  links: ["Styleguide", "Changelog", "licenses", "Team"],
};

const Footer: React.FC = () => {
  return (
    <footer className={`${classes.footer} content`}>
      <div className={classes.col}>
        <img
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
          className={classes.logo}
          alt="Logo"
        />
        <p>
          Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
          quam ac sed turpis volutpat. Cursus sed massa non .
        </p>
      </div>
      <div className={classes.lists}>
      <FooterList data={FOOTER_LIST_FIRST_DATA} />
      <FooterList data={FOOTER_LIST_SECOND_DATA} />
      </div>
    </footer>
  );
};

export default Footer;
