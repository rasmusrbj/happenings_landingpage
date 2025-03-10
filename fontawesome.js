// fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// You can add icons from different styles as needed
import {
    faUser,
    faHome,
    faBell,
    // Add more icons as needed
} from '@fortawesome/pro-solid-svg-icons';

import {
    faCalendar,
    faEnvelope,
    // Add more regular icons as needed
} from '@fortawesome/pro-regular-svg-icons';

// Prevent Font Awesome from automatically adding CSS to the page
// since we're handling it manually above
config.autoAddCss = false;

// Add all icons to the library
library.add(
    faUser,
    faHome,
    faBell,
    faCalendar,
    faEnvelope
    // Add other icons here as you import them
);
