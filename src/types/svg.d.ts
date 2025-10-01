// svg.d.ts

declare module "*.svg?react" {
  import React from "react";
  
  // Define the default export as the React component
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content; 
}