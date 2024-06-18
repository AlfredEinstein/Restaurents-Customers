import React from "react";
import LeftPart from "../Inc/LeftPart";
import MiddlePart from "../Inc/MiddlePart";
import RightPart from "../Inc/RightPart";

function Home() {
  return
    <div>
      <div className="LEFT">
        <LeftPart />
      </div>
      <div className="MIDDLE">
        <MiddlePart />
      </div>
      <div className="RIGHT">
        <RightPart />
      </div>
    </div>
  ;
}

export default Home;
