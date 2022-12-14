import { Config, VueFontAwesome } from "@ily1606/vue-font-awesome-pro";
import {
  faCircleExclamation,
  faXmark,
} from "@ily1606/pro-regular-svg-fontawesome";
import {
  faCaretLeft,
  faCaretUp,
  faCaretDown,
  faSpinnerThird,
} from "@ily1606/pro-solid-svg-fontawesome";
import {
  faClouds,
  faLeaf,
  faSunBright,
  faMoon,
  faHouseUser,
  faCloudSunRain,
  faKeyboard,
  faGear,
  faCalendar,
  faSun,
  faLocationArrow,
  faMoonStars,
  faCloudsMoon,
  faCloudMoon,
  faCloud,
  faCloudsSun,
  faCloudFog,
  faCloudDrizzle,
  faCloudSnow,
  faCloudHailMixed,
  faCloudHail,
  faCloudBolt,
  faCloudBoltMoon,
  faSnowBlowing,
  faCloudShowersHeavy,
  faCloudShowers,
  faCloudMoonRain,
  faCloudSleet,
  faRotateRight,
  faPlus,
  faMagnifyingGlass,
  faLocationDot,
  faLocationCheck,
  faPencil,
  faTrash,
  faThumbtack,
  faLightbulb,
  faChartWaterfall,
  faRibbon,
  faTree,
  faUser,
  faBars,
  faPlay,
  faPause,
  faStop,
} from "@ily1606/pro-light-svg-fontawesome";
const icons = {
  faCircleExclamation,
  faCaretLeft,
  faClouds,
  faLeaf,
  faSunBright,
  faMoon,
  faHouseUser,
  faCloudSunRain,
  faKeyboard,
  faGear,
  faCalendar,
  faSpinnerThird,
  faSun,
  faLocationArrow,
  faMoonStars,
  faCloudsMoon,
  faCloudMoon,
  faCloud,
  faCloudsSun,
  faCloudFog,
  faCloudDrizzle,
  faCloudSnow,
  faCloudHailMixed,
  faCloudBolt,
  faCloudBoltMoon,
  faSnowBlowing,
  faCloudShowersHeavy,
  faCloudShowers,
  faCloudMoonRain,
  faCloudSleet,
  faCloudHail,
  faRotateRight,
  faPlus,
  faMagnifyingGlass,
  faLocationDot,
  faLocationCheck,
  faXmark,
  faPencil,
  faTrash,
  faCaretUp,
  faCaretDown,
  faThumbtack,
  faLightbulb,
  faChartWaterfall,
  faRibbon,
  faTree,
  faUser,
  faBars,
  faPlay,
  faPause,
  faStop,
};
const setup = (app) => {
  app.use(Config, icons);
  app.component("VueFontAwesome", VueFontAwesome);
};
export { setup };
