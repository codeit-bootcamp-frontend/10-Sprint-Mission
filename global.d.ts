// global.d.ts
declare module '*.png' {
    const content: StaticImageData;
    export default content;
}