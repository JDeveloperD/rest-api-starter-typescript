import mongoose from 'mongoose'
import chalk from 'chalk'

mongoose.Promise = global.Promise

export default class MongoDB {
  constructor (public url: string) {
    this.connect()

    mongoose.connection.on('error', (err) => {
      console.log('>> Failed to connect to MongoDB, retrying...', err)

      setTimeout(() => {
        this.connect()
      }, 5000)
    })

    mongoose.connection.on('disconnected', this.connect)
  }

  connect (): void {
    mongoose.connect(this.url).then(() => {
      return console.log(`✔️  [MONGOOSE] Conectada con éxito => ${chalk.bgYellow.black(this.url)}`)
    })
  }

  disconnect () {
    return 'disconnect'
  }
}
