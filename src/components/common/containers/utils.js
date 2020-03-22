export const getMeasurement = (m, suffix) => {
    const parsed = Number.parseInt(m);
    const  result = (Number.isNaN(parsed)) ? m : parsed + suffix;
    console.log('called ', m, suffix ,' = ', result );
    return result
  }

  export const getCleanedGridOptions = styles => {
    const json = JSON.stringify(styles);
    return (!!Object.keys(styles) && Object.keys(styles).length > 0) ? json.replace(/["']/g, "") : {};
  }

   export const getCleanedOption = value => {
    return value.replace(/["']/g, "");
  }