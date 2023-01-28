import { google } from 'googleapis';
// @ts-ignore
import keys from 'key';

export default function handler(req, res) {
  try {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ['https://www.googleapis.com/auth/spreadsheets'],
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const gsapi = google.sheets({ version: 'v4', auth: client });

      const opt = {
        spreadsheetId: '12V6z1jS29EaYQcfvguEb0t4GqzEtPsQP5CRmfKRZoSs',
        range: 'JanuarySummary!D22:D32',
      };

      let data = await gsapi.spreadsheets.values.get(opt);
      return res
        .status(400)
        .send(JSON.stringify({ error: false, data: data.data.values }));
    });
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}
