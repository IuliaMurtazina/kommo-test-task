import React from "react";
import classes from "./NotFound.module.scss";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`${classes["not-found"]} content`}>
      <p>The requested page was not found.</p>
      <Button
        variant="outlined"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to main
      </Button>
    </div>
  );
};

export default NotFound;
