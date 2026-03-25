import fs from 'node:fs/promises'

const Db_path = new URL('../db.json', import.meta.url).pathname 

export const getDB = async()=>{
  const db = await fs.readFile(Db_path  , 'utf-8')
  return JSON.parse(db)
}

export const saveDB = async(db)=>{
 await fs.writeFile(Db_path, JSON.stringify(db, null, 2))
return db 
}

export const insert = async(note)=>{
  const db = await getDB()
  db.notes.push(note)
  await saveDB(db) 
  return note
}
