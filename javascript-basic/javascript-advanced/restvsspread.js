/**
 * Chatgpt Practise
 * একটা object { name: 'Rana', age: 30, hobby: 'football' } থেকে
hobby বাদ দিয়ে বাকি গুলো নতুন object-এ রাখো
এবং এরপর তার মধ্যে নতুন একটা প্রপার্টি isActive: true যোগ করো।
 */

const playerinfo = { name: 'Rana', age: 30, hobby: 'football' }
const { hobby, ...restin } = playerinfo
const activeOrNot = { isActive: true }
const PlayerInfoUpdated = { ...restin, ...activeOrNot }
console.log(PlayerInfoUpdated)