// fix the import error in .css file

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
