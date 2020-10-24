'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }

  // '0/* * * * * *': async () => {
  //   console.log('1 minute later');
  //   try {

  //     // console.log(strapi.plugins);
  //     let res = await strapi.plugins['email'].services.email.send({
  //       to: 'george.iliadis.91@gmail.com',
  //       from: 'joelrobuchon@strapi.io',
  //       replyTo: 'no-reply@strapi.io',
  //       subject: 'Use strapi email provider successfully',
  //       text: 'Tralalala',
  //       html: 'Tralalala',
  //     });

  //     console.log(res);

  //     console.log('res', res);
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },

};
