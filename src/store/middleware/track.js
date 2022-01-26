/**
 *
 */

'use strict';

// import F8Analytics from "../F8Analytics";
// import type { Action } from "../actions/types";

function track(action) {
    switch (
        action.type
        // case "LOGGED_IN":
        //   F8Analytics.logEvent("Login", 1, { source: action.source || "" });
        //   break;

        // case "LOGGED_OUT":
        //   F8Analytics.logEvent("Logout", 1);
        //   break;

        // case "SKIPPED_LOGIN":
        //   F8Analytics.logEvent("Skip login", 1);
        //   break;

        // case "SESSION_ADDED":
        //   F8Analytics.logEvent("Added To Schedule", 1, { id: action.id });
        //   break;

        // case "SESSION_REMOVED":
        //   F8Analytics.logEvent("Removed From Schedule", 1, { id: action.id });
        //   break;

        // case "TURNED_ON_PUSH_NOTIFICATIONS":
        //   F8Analytics.logEvent("Enabled Push", 1);
        //   break;

        // case "SKIPPED_PUSH_NOTIFICATIONS":
        //   F8Analytics.logEvent("Disabled Push", 1);
        //   break;

        // case "SET_SHARING":
        //   F8Analytics.logEvent(
        //     action.enabled ? "Enabled Sharing" : "Disabled Sharing",
        //     1
        //   );
        //   break;

        // case "APPLY_SCHEDULE_TOPICS_FILTER":
        //   F8Analytics.logEvent("Filtered Schedule", 1);
        //   break;

        // case "APPLY_VIDEO_TOPICS_FILTER":
        //   F8Analytics.logEvent("Filtered Videos", 1);
        //   break;
    ) {
    }
}

module.exports = track;
