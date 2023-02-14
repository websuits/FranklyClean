define([
    'jquery',
    'matchMedia',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    /**
     * Small desktop + tablet
     *
     * ---------------------------
     */
    mediaCheck({
        media: '(min-width: 1024px)',

        /**
         * Switch to Desktop Version.
         */
        entry: function () {
            (function () {

            })();
        },

        /**
         * Switch to Mobile Version.
         **/
        exit: function () {
            (function () {

            })();
        }
    });

    /**
     * Tablet
     *
     * ---------------------------
     */
    mediaCheck({
        media: '(min-width: 992px)',

        /**
         * Switch to Desktop Version.
         */
        entry: function () {

            (function () {

            })();
        },

        /**
         * Switch to Mobile Version.
         */
        exit: function () {

            (function () {

            })();
        }
    });
});
