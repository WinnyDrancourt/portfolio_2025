import https from 'node:https'

export default class ContactServices {
  private static endpoint = 'https://formspree.io/f/xanyywwl'

  public static async send(payload: { email: string; name: string; message: string }) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(payload)
      const url = new URL(this.endpoint)

      const options = {
        hostname: url.hostname,
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
        },
      }

      const req = https.request(options, (res) => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          resolve(true)
        } else {
          reject(new Error(`Formspree error: ${res.statusCode}`))
        }
      })

      req.on('error', (err) => reject(err))
      req.write(data)
      req.end()
    })
  }
}
