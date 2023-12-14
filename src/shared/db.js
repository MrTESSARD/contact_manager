import Firebase from'forebase/app'
import 'firebase/firestore'
import fsConfig from './config'

const config = fsConfig;

const App =Firebase.initializeApp(config)
const db=App.firestore()
db.settings({timestampsInSnapshots:true})

export default{
    create(contact){
      return  db.collectio('contacts').add(contact)
    },
    read(){
        return db.collectio('contacts').get()
    },
}