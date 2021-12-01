declare let window: any;

export const updateDimensions = (setWidthFn: any, setHeightFn: any) => {
  setWidthFn(window.innerWidth);
  setHeightFn(window.innerHeight);
};
