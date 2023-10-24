'use strict';

/**
 * students-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::students-page.students-page');
