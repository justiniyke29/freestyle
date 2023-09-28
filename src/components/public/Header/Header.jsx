import React from "react";

import styles from "./Header.module.scss";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>The Ultimate Task Management Solution</h1>
        <p className={styles.paragraph}>
          Stay in complete control of your workflow with the ability to define
          each stage of work, providing you with a clear overview of what's
          important and identifying any bottlenecks or hurdle that may arise
        </p>
        <div className={styles.button_container}>
          <Button className="bg-[#9f91f3]">Get Started Now</Button>
          <Button variant="outline" className="bg-[#fef1cf]">
            See how it works
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
