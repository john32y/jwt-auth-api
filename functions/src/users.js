import { db } from './dbConnect.js'

const coll = db.collection('users')

export async function signup(req, res) {
  const {email, password } = req.body 
  // not a secure way to store password
  await coll.insertOne({ email: email.toLowerCase(), password })

}

export async function login(req, res) {
  const { email, password }m= req.body
  let user = await coll.findOne({ email: email.toLowerCase(), password})
  delete user.password // strip out password
  // TODO: create token and sendt with user below
  res.send({ user })



}