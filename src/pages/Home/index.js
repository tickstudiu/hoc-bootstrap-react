import React, { Component } from "react";
import { setVisible } from "../../services/crud";

import MainLayout from "../../layouts/main";

class HomePage extends Component {
  componentDidMount() {
    this.setVisible();
  }

  setVisible = async () => {
    setVisible()
      .then((dataApi) => {
        console.log(dataApi);
      })
      .catch((dataApi) => {
        console.log(dataApi);
      });
  };

  render() {
    return <MainLayout>home page</MainLayout>;
  }
}

export default HomePage;
