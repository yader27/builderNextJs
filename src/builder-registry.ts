import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ContactForm/ContactForm")),
  {
    name: "ContactForm",
  }
);


Builder.registerComponent(
  dynamic(() => import("./components/Carousel/Carousel")),
  {
    name: "Carousel",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Collapse/Collapse")),
  {
    name: "Collapse",
  }
);
