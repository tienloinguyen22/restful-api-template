/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable max-len */

export const overrideConfig = {
  database: { connectionString: 'mongodb://localhost:27017/pets-hotel' },
  cors: { whitelistUrls: [] },
  api: {
    prefix: '/api',
    docsUrl: '/docs',
    docsJson: '/json',
  },
  firebase: {
    serviceAccount: {
      type: 'service_account',
      project_id: 'techkids-ac7a7',
      private_key_id: 'e701c1b20e44681a28b819541ce9ac74caea21e3',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDsn8ckO90iBroK\nNZvPgHMEaFSInKoN8kKvk2zx1hYwhMb4N2kfAeQzo+br7JSzyg19jNSyFjd3Pbq0\nzSZkZUYhfwjlBQuxyoJNgeDD0mhmY8c5KZ9uDhzx6U6X44NI/AKhUWmX3keEUuBN\n5BAuZeAWDc184hBD38MGSJCBm2hu//qEn4seIbvFh79dMuymzRwxy6cXbNgzUfll\n1b7VLpWyyEQblIbMQT60LjBz01VxeuINdxVZ5oUHWOCmw8erUzJrjRwZ4Du5T25j\nkhFVX+NkOSHhXlanX94PJyHHeGrYeOGMD/H64SRbCebUmn01l5TBBrU+WaRb09un\nWD/Xi74BAgMBAAECggEAE4s64oZDRH0zvoYhAWmFlnabjNELxq0czu2pUOwy1v0Q\nhg3lk9cPJyjBePkIazUkGhuYscDeAe5KToanRiGLQlcAwBHDnoKwcoBotSPa1aIm\nIVWLwoZN47k2cZssC8os2XAk/ZMxav+BYU2V/I8TjB7Fuyvc1g5USF+T9/CDFq/L\nMZbLFTEvFVtix6I0Gmp87QCAk44+X4X1H/0xXoWJ8pOKnQxLTH7QaFOA/ZdGU4iM\nR/iZllKJoehybM189SPO7XMQoVWDdN+1Ae+WgFGg14gs8+aoJbTpKIAd7EafDSPl\nCuN9as9ufJpgNuHM4WPOtLTxEb2me5VbmOxSRtQcJQKBgQD7h16XJ9EZzS4bzPaN\n7JHF0Lj/wqeeAPHOmu0xLk5OOcSIgyIzPKKupXMlQOwbdBPFYiUYBOKL4t8YPjb/\nn3XhGLPQMB/UFIyNZ1JIMP/d4bfDgCuI1ZFILjqlK1iz6PNt9CTJdrsZIkQtyMES\n1GjL5WGG5R6kvbAwrWJEwKv1IwKBgQDw1JT2O6J8HBT2U4L942WB0Zx8q2u0OaSq\nNDdT00oBYNMPCm2s3HdQTJhEm9XHdDXLKGrW7vM7wg3X3JCrvC+a8o87Jv1sZuS/\nI9peHwZYaGYClEtAoZCXCp+peQ26QejCZQ2GtfSz3nK7Naf1LV0gtIC6cnOA9Fzu\ni60XjZAMiwKBgQCzSWh5Id6AH6pwEobj3u6BLCfR1nQXweCaPgA4ACO8ypx2GdK0\n5tGm3zPWKBKj9vdoyG5cUo8Q2uPeqeoWBxnFGxCAouztBMCywiT6ZELda1jLN37Q\niDqIUrtmpCEUDEYH5/CY0dLHNY+XevN0codIXvZHauWO087Uw6G6FAP+NQKBgC/g\nw2CUiIAOASjbf25EF/kQGAE8/yOMVi00Rk+W8N6HRk52L0mvZtUC9T6mkICfnNYv\nydXDGX4m3SOuCODrf7dZQ5pp7PXxGsbZNN+DYXqP/r/ChZdqx1kP1qAVneIKmmCT\nQHYolGZx8fM//o0ioKIQ4IqwmD/p1NPj1tyY2ytzAoGBAIVr4GMv5x6gM+RxVb3P\nitRLGHJUP+Ql3ADMCBxEVacxK4UopYow7AU3bJVUstOekjNUc9NeCDV+ko6n7xA4\nonyr+jEivNEBtqoG6Mt4ipew0+v4hr4SbEqR6l5hJi9Ig7m4u1sUmjaoeo/gWQTD\nZSzA8LyXCxcuzvui0Xf4fQT2\n-----END PRIVATE KEY-----\n',
      client_email: 'firebase-adminsdk-jxn7b@techkids-ac7a7.iam.gserviceaccount.com',
      client_id: '108724502261254340044',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jxn7b%40techkids-ac7a7.iam.gserviceaccount.com',
    },
    databaseURL: 'https://techkids-ac7a7.firebaseio.com',
  },
};
