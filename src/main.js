import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/bg-parallax";
import "./scripts/skill-scales";
import "./scripts/works";
import "./scripts/comments";