/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex.raw('SET FOREIGN_KEY_CHECKS = 0');

  await knex.raw('TRUNCATE TABLE user');
  await knex.raw('TRUNCATE TABLE channel');
  await knex.raw('TRUNCATE TABLE video');

  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');

  await knex('channel').insert([
    {
      id: 1,
      name: 'channel01'
    },
    
    {
      id: 2,
      name: 'channel02'
    },
  ]);

  await knex('user').insert([
    {
      id: 1,
      name: 'weslley',
      email: 'weslley@hotmail.com',
      channelId: 1 
    },

    {
      id: 2,
      name: 'wef',
      email: 'tecnologia@hotmail.com',
      channelId: 2 
    },
  ]);

  return await knex('video').insert([
    {
      id: 1,
      title: 'video1ByUser1',
      channelId: 1
    },

    {
      id: 2,
      title: 'video2ByUser2',
      channelId: 1
    },

    {
      id: 3,
      title: 'video3ByUser3',
      channelId: 2
    },
  ]);
};
