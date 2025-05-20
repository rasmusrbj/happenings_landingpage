// fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// You can add icons from different styles as needed
import {
    faUser,
    faHome,
    faBell,
    faMapPin,
    faUsers,
    faExternalLink,
    faClock,
    faStar,
    faArrowRight,
    faCheck,
    faExclamationTriangle,
    faSpinner,
    faGlobe,
    // Add more icons as needed
} from '@fortawesome/free-solid-svg-icons';

import {
    faCalendar,
    faEnvelope,
    faCalendarCheck,
    // Add more regular icons as needed
} from '@fortawesome/pro-regular-svg-icons';

import {
    faInstagram,
    // Add more brand icons as needed
} from '@fortawesome/free-brands-svg-icons';

// Prevent Font Awesome from automatically adding CSS to the page
// since we're handling it manually above
config.autoAddCss = false;

// Add all icons to the library
library.add(
    faUser,
    faHome,
    faBell,
    faMapPin,
    faUsers,
    faExternalLink,
    faClock,
    faStar,
    faArrowRight,
    faCheck,
    faExclamationTriangle,
    faSpinner,
    faGlobe,
    faCalendar,
    faEnvelope,
    faCalendarCheck,
    faInstagram
);
