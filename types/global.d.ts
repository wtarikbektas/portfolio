declare module "*.css";
declare module "*.scss";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

interface CSSModuleMap {
  readonly [key: string]: string;
}

declare module "*.module.css" {
  const classes: CSSModuleMap;
  export default classes;
}
